import { questionsType } from "~/components/types/types";
import resGPT4o from "../integrations/Funtion";

const newQualification = (res: string | null) => {
  if (!res) return null;

  const string = res.toLowerCase();

  if (string === "true") return true;
  if (string === "false") return false;
};

export default defineEventHandler(async (event) => {
  const { question }: { question: questionsType } = await readBody(
    event
  );

  const [rating, review] = await Promise.all([
    resGPT4o(question, 0),
    resGPT4o(question, 1),
  ]);

  const qualification = newQualification(rating);

  return {
    qualification: qualification,
    review,
  };
});
