<script setup lang="ts">
useHead({
  link: [
    {
      rel: "icon",
      href: "/IMG/favicon.png",
    },
  ],
});
</script>

<template>
  <div
    class="flex flex-col items-center pt-9 w-full h-[100vh] bg-[#f9fafb]">
    <div
      class="bg-white lg:w-4/5 w-[95%] min-h-[500px] rounded-lg border border-[#eeeff0] lg:px-6 px-3">
      <NuxtPage />
    </div>
  </div>
</template>
