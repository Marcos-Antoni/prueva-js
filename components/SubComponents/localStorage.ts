import type { questionsType } from "../types/types";

export function useLocalStorage(question: questionsType) {
  const questions = JSON.parse(
    localStorage.getItem("questions") || "[]"
  );
  questions.push(question);
  localStorage.setItem("questions", JSON.stringify(questions));
}

export function getLocalStorage() {
  return JSON.parse(localStorage.getItem("questions") || "[]");
}

export function deleteLocalStorage() {
  localStorage.setItem("questions", "[]");
}
