<template>
  <div class="home">
    <md-editor :value="mdValue" :handle-change="mdOnChange" />
    <code-editor :value="codeValue" :handle-change="codeOnChange" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import MdEditor from "@/components/MdEditor.vue";
import CodeEditor from "@/components/CodeEditor.vue"; // @ is an alias to /src

const codeValue = ref();
const mdValue = ref();

const mdOnChange = (v: string) => {
  mdValue.value = v;
};
const codeOnChange = (v: string) => {
  codeValue.value = v;
};
</script>
