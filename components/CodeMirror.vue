<script setup lang="ts">
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const reply = defineModel();

const extensions = [javascript(), oneDark];
</script>

<template>
  <codemirror
    v-model="reply"
    placeholder="Code goes here..."
    :style="{ height: '70%' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions" />
</template>
