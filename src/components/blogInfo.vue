<template>

  <div class="container">

    <div class="left">
      <me-info-card class="infoCard">
        <template #name>周逸凡</template>
        <template #introduction>湖北工程学院21级计科</template>
        <template #birthday>2002-3-9</template>
      </me-info-card>

<!--      <div class="contentInfo">-->

<!--        <div class="rightBottomTitle title font">-->
<!--          联系方式-->
<!--        </div>-->

<!--        <div class="QQ font">-->
<!--          QQ:1440846446-->
<!--        </div>-->

<!--        <div class="vx font">-->
<!--          VX:zhouyifan0309-->

<!--        </div>-->

<!--        <div class="github font" @click="clickTo('https://github.com/zyifan1')">-->
<!--          点击查看GitHub-->
<!--        </div>-->

<!--      </div>-->

    </div>


    <div class="middle">

      <div class="middleTitle">
        <!--        不要麻木,不要被同化,拼命成为那个有力量破釜沉舟的人!-->
        纵是他乡万盏灯,不抵故乡当头月。
      </div>

      <div class="searchContainer">
        <search class="search"></search>
      </div>

      <router-view></router-view>

    </div>

    <div class="right">

      <tab-list></tab-list>

    </div>


  </div>

</template>

<script setup>
import MeInfoCard from './meInfoCard.vue'
import ContentCard from './blogMainMiddle/contentCard.vue'
import allContent from "../blogArticle/mdExport.js";
import img from '../assets/cardImg/img.png'
import bytemdIntroduction from '../blogArticle/bytemd/introduction.md?raw'
import {onBeforeMount, onMounted} from "vue";
import {ref} from "vue"
import myAxios from "../plugins/myAxios.js";
import queryAllArticle from "../plugins/queryArticle.js";
import Search from "./search.vue";
import {useRoute} from "vue-router";
import TabList from "./right/tabList.vue";


let cardInfoArr = ref([])
const isShow = ref(false)

const route = useRoute()


/**
 * onBeforeMount(async () => {
 *   const res = await myAxios.post('/queryAllArticle')
 *   cardInfoArr.value = res.data.data
 * })
 */

onMounted(async () => {
  cardInfoArr.value = await queryAllArticle()
  console.log(cardInfoArr.value.length !== 0)
  isShow.value = true
})

/**
 * onMounted(() => {
 *   myAxios.post('/queryAllArticle').then((res) => {
 *     console.log(res);
 *     cardInfoArr.value = res.data.data
 *     console.log(cardInfoArr.value)
 *     for (const cardInfo in cardInfoArr.value) {
 *       console.log(cardInfoArr.value[cardInfo]);
 *     }
 *   })
 * })
 */


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
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
}


.middle {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70vw;
  overflow: scroll;
}

.right{
  width: 10vw;
}

.middle::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

.middleTitle {
  height: 10vh;
  width: 60%;
  min-width: 256px;
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 5vh;
  font-size: 1.5rem;
}

.searchContainer {
  margin-bottom: 5vh;
  width: 30vh;
}

.search {
  width: 100%;
}


.infoCard {
  width: 60%;
  height: 50%;
  display: flex;
  flex-direction: column;
}


.title {
  font-size: 1.2rem;
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