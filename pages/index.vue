<script setup lang="ts">
import Nave from "../components/SVG/Nave.vue";
import Bandera from "~/components/SVG/Bandera.vue";
import Codigo from "~/components/SVG/Codigo.vue";

useHead({
  title: "Front-End JS",
});

const steps = [
  {
    icon: Bandera,
    title: "1. Prepárate",
    description:
      "Asegúrate de estar en un entorno cómodo y sin distracciones antes de iniciar el examen, ya que no podrás interrumpirlo una vez iniciado.",
  },
  {
    icon: Codigo,
    title: "2. Completa el test",
    description:
      "Tendrás 10 preguntas de opción múltiple sobre JavaScript Front-End. Dispones de 50 minutos para completar el examen.",
  },
  {
    icon: Nave,
    title: "3. Obtén un resultado",
    description:
      "Al finalizar el examen verás tu calificación y tendrás la opción de repetirlo para aprobarlo o mejorar tu score.",
  },
];
</script>

<template>
  <div class="h-full flex flex-col justify-between gap-[20px]">
    <ComponentHeader />
    <section
      class="flex justify-around relative xl:flex-row flex-col gap-[30px]">
      <div
        class="border-dashed border-t-4 border-[#168a41] w-8/12 h-2 absolute top-[35px] xl:block hidden"></div>

      <div
        v-for="(step, index) in steps"
        :key="index"
        class="flex items-center flex-col z-50">
        <div
          class="bg-[#dafcde] p-3 rounded-full border-[6px] border-white shadow">
          <component :is="step.icon" />
        </div>

        <h2 class="font-bold xl:pt-[50px] pt-[10px]">
          {{ step.title }}
        </h2>
        <p class="mt-2 text-sm text-center text-[#6b7280] w-[300px]">
          {{ step.description }}
        </p>
      </div>
    </section>

    <div class="flex space-x-2 justify-center">
      <div class="flex justify-center pb-10">
        <BTNLink link="/examen"> Empezar </BTNLink>
      </div>
    </div>
  </div>
</template>
