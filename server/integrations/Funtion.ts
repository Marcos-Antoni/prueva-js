import { questionsType } from "~/components/types/types";
import openai from "./openAI";
import gemini from "./gemini";

const personalities = [
  "Eres un sistema respondera solo TRUE o FALSE para contestar si la respuesta es correcta o no",
  "Eres un sistema que finge ser un ogro programador y responderás con un review de la respuesta de cómo mejorarlo si lo hace mal o felicitarlo si lo hace bien, a ambas responde de forma un poco graciosa. Solo habla del contenido de la respuesta y de la pregunta. La review tiene que ser corta, concisa y no tiene que llevar código",
];

const resGPT4o = async (question: questionsType, personality: number) => {
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    responseMimeType: "text/plain",
  };
  const model = "gemini-2.5-flash";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `${personalities[personality]}:
              pregunta: ${question.question}
              contenido para verificar la respuesta: ${question.content}
              respuesta: ${question.reply}`,
        },
      ],
    },
  ];

  const response = await gemini.models.generateContentStream({
    model,
    config,
    contents,
  });
  let text = "";
  for await (const chunk of response) {
    text += chunk.text;
  }

  return text;
};

export default resGPT4o;
