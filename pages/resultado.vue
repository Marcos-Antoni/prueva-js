<script setup lang="ts">
import type { questionsType } from "../components/types/types";
import { getLocalStorage } from "../components/SubComponents/localStorage";

const questions = ref<questionsType[]>([]);
const numberQuestion = ref(0);
const isOgro = ref(false);

useHead({
  title: "Resultado",
});

onBeforeMount(() => {
  const lengthQuestions = getLocalStorage().length;

  if (!lengthQuestions) {
    navigateTo("/");
  }

  questions.value = getLocalStorage() || [];
});

const score = computed(() => {
  if (!questions.value.length) return "0/100";

  const totalQuestions = questions.value.length;
  const correctQuestions = questions.value.filter(
    (question: questionsType) => question.rating
  ).length;

  const percentage = Math.round(
    (correctQuestions / totalQuestions) * 100
  );

  return `${percentage}/100`;
});

const textColor = computed(() =>
  questions.value[numberQuestion.value]?.rating
    ? "color: #168a41"
    : "color: #f44143"
);

const functionNumberQuestion = (number: number) => {
  const suma = numberQuestion.value + number;

  if (suma < 0) return;
  if (suma >= questions.value.length) return;

  numberQuestion.value = suma;
};
</script>

<template>
  <div
    class="min-h-full h-auto flex flex-col justify-between py-[25px] lg:px-[80px] sm:px-[20px] px-[0]">
    <h1 class="text-center text-xl sm:text-3xl font-bold leading-8">
      ¡Felicitaciones has terminado!
    </h1>

    <section
      class="flex justify-between border-b border-gray-500 border-opacity-20 pb-[30px]">
      <div
        class="lg:w-[50%] w-full flex flex-col justify-between gap-[30px]">
        <ComponentHeader />
        <div class="flex items-center gap-[10px]">
          <div
            class="w-8 h-8 bg-[#dafcde] rounded-full flex justify-center items-center">
            <SVGEstrella />
          </div>

          <p class="text-xs text-gray-500 leading-4">
            Tu Score:
            <span class="font-bold text-sm leading-5 text-black">{{
              score
            }}</span>
          </p>
        </div>

        <FunctionButton isArrow @click-btn="isOgro = !isOgro">
          ¿Quieres que el don Ogracio critica tu coigo?
        </FunctionButton>
      </div>

      <!-- <img
        class="flex-shrink-0 w-64 h-full lg:block hidden"
        src="/img/resultado.png"
        alt="Felicidades" /> -->
    </section>

    <div
      class="flex flex-col items-center lg:gap-[30px] gap-[10px] my-[30px]"
      v-show="isOgro">
      <h2
        class="text-center text-xl sm:text-3xl font-bold leading-8"
        :style="textColor">
        {{ questions[numberQuestion]?.question }}
        {{ numberQuestion + 1 }}/{{ questions.length }}
      </h2>

      <p class="text-sm">
        <span class="font-bold lg:text-base text:sm">
          Respuesta de Ogracio:
        </span>
        {{ questions[numberQuestion]?.review }}
      </p>

      <div class="w-full flex justify-between">
        <FunctionButton
          @click-btn="functionNumberQuestion(-1)"
          isArrow>
          Anterior
        </FunctionButton>

        <FunctionButton
          @click-btn="functionNumberQuestion(1)"
          isArrow>
          siguiente
        </FunctionButton>
      </div>
    </div>

    <div class="flex justify-center">
      <BTNLink link="/"> Regresar </BTNLink>
    </div>
  </div>
</template>
