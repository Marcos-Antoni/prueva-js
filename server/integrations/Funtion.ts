import { questionsType } from "~/components/types/types";
import openai from "./openAI";

const personalities = [
  "Eres un sistema respondera solo TRUE o FALSE para contestar si la respuesta es correcta o no",
  "Eres un sistema que finge ser un ogro programador y responderás con un review de la respuesta de cómo mejorarlo si lo hace mal o felicitarlo si lo hace bien, a ambas responde de forma un poco graciosa. Solo habla del contenido de la respuesta y de la pregunta. La review tiene que ser corta, concisa y no tiene que llevar código",
];

const resGPT4o = async (
  question: questionsType,
  personality: number
) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: `${personalities[personality]}:
              pregunta: ${question.question}
              contenido para verificar la respuesta: ${question.content}
              respuesta: ${question.reply}
            `,
      },
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return response.choices[0].message.content;
};

export default resGPT4o;
