<template>

  <vue-label v-if="props.vue"></vue-label>
  <java-label v-if="props.java"></java-label>

</template>

<script setup>

import VueLabel from "./blogLabel/vueLabel.vue";
import JavaLabel from "./blogLabel/javaLabel.vue";

const props = defineProps(['vue','java'])

</script>

<style scoped>

</style>