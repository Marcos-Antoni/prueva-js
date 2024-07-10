<script setup lang="ts">
import { useQuestions } from "../components/SubComponents/questions";
import {
  useLocalStorage,
  deleteLocalStorage,
} from "./SubComponents/localStorage";

const { questions, length } = useQuestions();

interface Body {
  qualification: boolean;
  review: string;
}

const numQuestion = ref(0);
const code = ref("");

onBeforeMount(() => {
  deleteLocalStorage();
});

const incrementNumQuestion = async () => {
  if (!code.value) return alert("Debes responder la pregunta");

  if (numQuestion.value != length - 1) {
    submit(numQuestion.value, code.value);

    code.value = "";
    numQuestion.value++;
  } else {
    await submit(numQuestion.value, code.value);

    await navigateTo("/resultado");
  }
};

async function submit(num: number, code: string) {
  try {
    const question = {
      ...questions.value[num],
      reply: code,
    };

    const body: Body = await $fetch("/api/qualification", {
      method: "post",
      body: { question },
    });

    question.rating = body.qualification;
    question.review = body.review;

    useLocalStorage(question);
  } catch (e) {
    console.log(e);
  }
}
</script>

<template>
  <div
    class="h-[500px] flex flex-col justify-between py-[30px] gap-[10px]">
    <p class="text-gray-500 text-base leading-6">
      Pregunta {{ numQuestion + 1 }}/{{ length }}
    </p>
    <h2 class="title-question text-xl font-bold leading-8">
      {{ questions[numQuestion].question }}
    </h2>

    <CodeMirror v-model="code" />
    <div class="flex justify-end">
      <FunctionButton @click-btn="incrementNumQuestion">
        Siguiente
      </FunctionButton>
    </div>
  </div>
</template>
