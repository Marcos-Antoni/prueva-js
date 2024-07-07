<script setup lang="ts">
const { isArrow } = defineProps({
  isArrow: Boolean,
});
</script>

<template>
  <button
    class="px-5 py-2 text-base border-[#9854f1] bg-[#9854f1] text-white rounded-lg border hover:border-purple-400 hover:bg-purple-400 cursor-pointer inline-flex items-center justify-center outline-none relative focus:outline-none button-shadow"
    @click="$emit('clickBtn')">
    <span class="flex items-center justify-center">
      <slot> </slot>

      <SVGFlecha :style="isArrow && 'display: none;'" />
    </span>
  </button>
</template>
