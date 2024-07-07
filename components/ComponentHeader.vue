<script setup lang="ts">
const img = "/img/js.svg";
</script>

<template>
  <header
    class="border-b border-gray-500 border-opacity-20 flex justify-start items-center gap-4 pt-6 pb-4">
    <div class="p-3 bg-[#f6f1fb] rounded-lg">
      <img
        class="object-contain w-7 h-7"
        :src="img"
        alt="JavaScript Front-End"
        width="15px"
        height="15px" />
    </div>
    <h2 class="text-base leading-6 font-semibold">
      JavaScript Front-End
    </h2>
  </header>
</template>
