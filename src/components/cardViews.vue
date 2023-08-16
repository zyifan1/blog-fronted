<template>
  <Viewer :value="contentInfo" :plugins="plugins" class="markdownView"></Viewer>
</template>

<script setup>
import "github-markdown-css/github-markdown-light.css";
import highlight from "@bytemd/plugin-highlight";
import gfm from "@bytemd/plugin-gfm";
import {Viewer} from '@bytemd/vue-next'
import {ref} from "vue";

const plugins = [gfm(), highlight()];
const props = defineProps(['content'])

const contentInfo = ref(props.content)


// const {content} = props.content
</script>

<style scoped>
.markdownView {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  //padding: 45px;
}

@media (max-width: 767px) {
  .markdownView {
    //padding: 15px;
  }
}

</style>