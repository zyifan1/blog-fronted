<template>

  <div class="container">

    <div class="left">
      <me-info-card class="infoCard">
        <template #name>周逸凡</template>
        <template #introduction>湖北工程学院21级计科</template>
        <template #birthday>2002-03-09</template>
      </me-info-card>

      <div class="contactInfo">

        <div class="rightBottomTitle title font">
          联系方式
        </div>

        <div class="QQ font">
          QQ:1440846446
        </div>

        <div class="vx font">
          VX:zhouyifan0309
        </div>

        <div class="github font" @click="clickTo('https://github.com/zyifan1')">
          点击查看GitHub
        </div>

      </div>

    </div>

    <div class="middle">

      <div class="middleTitle">
        小周太酷啦
      </div>

      <div class="search">
        <search></search>
      </div>

      <!--      <content-card class="card card-one" v-for="info in cardInfoArr">-->
      <!--        <template #createTime>-->
      <!--          {{ info.createTime }}-->
      <!--        </template>-->
      <!--        <template #title>-->
      <!--          {{ info.title }}-->
      <!--        </template>-->
      <!--        <template #introduction.md>-->
      <!--          {{ info.introduction.md }}-->
      <!--        </template>-->
      <!--      </content-card>-->


      <content-card class="card card-one" v-for="info in cardInfoArr" :info="info"></content-card>


    </div>


    <div class="right">


    </div>


  </div>

</template>

<script setup>
import MeInfoCard from './meInfoCard.vue'
import ContentCard from './blogMainMiddle/contentCard.vue'
import allContent from "../blogArticle/mdExport.js";
import img from '../assets/cardImg/img.png'
import bytemdIntroduction from '../blogArticle/bytemd/introduction.md?raw'
import Search from "./uiverse/search.vue";

const cardInfoArr = [
  {
    createTime: '2023-7-23 16:44',
    title: 'ByteMD--基于Svelte构建的Markdown编辑器组件',
    introduction: bytemdIntroduction,
    content: allContent[0],
    img: img,
    label: {
      vue: true
    }
  },
  {
    createTime: '',
    title: '',
    introduction: '',
    content: '',
    img: undefined,
    label: undefined
  },
  {
    createTime: '',
    title: '',
    introduction: '',
    content: '',
    img: undefined,
    label: undefined
  },
]


const clickTo = (url) => {
  window.open(`${url}`)
}

</script>

<style scoped>

.container {
  --leftWidth: 20vw;
  --rightWidth: 10vw;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: relative;
}

.left {
  height: 100vh;
  width: var(--leftWidth);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
//left: 5vw;
}

.right {
  height: 100vh;
  width: var(--rightWidth);
}

.middle {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: calc(100vw - var(--leftWidth) - var(--rightWidth));
}

.middleTitle {
  height: 10vh;
  width: 60%;
  text-align: center;
  margin-top: 15vh;
  margin-bottom: 5vh;
  font-size: 2rem;
}

.search{
  margin-bottom: 5vh;
}


.infoCard {
  width: 60%;
  height: 50%;
  display: flex;
  flex-direction: column;
}

.font {
  font-size: 1.2rem;
  margin-bottom: 1vh;
  font-weight: 500;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
}

.card {
  width: 85%;
  margin-bottom: 5vh;
}

.github {
  cursor: pointer;
}


</style>