<template>

  <div class="container">

    <div class="left">

      <div class="createTime">
        <svg t="1691407656655" class="icon createTimeFontIcon" viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg" p-id="5940" width="200" height="200">
          <path d="M512.9 503.4m-184.8 0a184.8 184.8 0 1 0 369.6 0 184.8 184.8 0 1 0-369.6 0Z" fill="#03BD61"
                p-id="5941"></path>
          <path
              d="M512 79.3C273.4 79.3 79.3 273.4 79.3 512S273.4 944.7 512 944.7 944.7 750.6 944.7 512 750.6 79.3 512 79.3z m0 790.9c-197.5 0-358.2-160.7-358.2-358.2S314.5 153.8 512 153.8 870.2 314.5 870.2 512 709.5 870.2 512 870.2z"
              fill="#23202D" p-id="5942"></path>
          <path
              d="M753.7 467.5H548.5V244.2c0-20.6-16.7-37.2-37.2-37.2S474 223.6 474 244.2v260.6c0 20.6 16.7 37.2 37.2 37.2h242.5c20.6 0 37.2-16.7 37.2-37.2s-16.6-37.3-37.2-37.3z"
              fill="#23202D" p-id="5943"></path>
        </svg>
        本文写于{{ props.info.createTime }}

      </div>

      <div class="title">
        {{ props.info.title }}
      </div>
      <div class="introduction">
        <card-views :content="props.info.introduction"></card-views>
<!--        <card-views :content=""></card-views>-->
      </div>


      <div class="content" v-if="isRotate === 'rotate(180deg)'">
        <card-views :content="props.info.content"></card-views>
      </div>

      <div class="likeContainer">
        <like class="likeIcon"></like>
        喜欢
      </div>

      <div class="label" id="label">
        <show-label
            :vue="isExist('vue')"
            :java="false"
        ></show-label>
      </div>


    </div>

<!--    <div class="right">-->

<!--      &lt;!&ndash;      <img :src="props.info.img" v-if="props.info.img" alt="图片">&ndash;&gt;-->

<!--    </div>-->

    <div class="contentContainer" v-if="isRotate === 'rotate(180deg)'">

    </div>

    <div class="contentBtn" @click="isRotate === 'rotate(0)'?isRotate = 'rotate(180deg)':isRotate = 'rotate(0)'">
      <down-arrow class="btn"></down-arrow>
    </div>

  </div>

</template>

<script setup>

import {onMounted, ref, watch} from "vue";
import Like from "../like.vue";
import ShowLabel from "../showLabel.vue";
import CardViews from "../cardViews.vue";
import DownArrow from "../icon/downArrow.vue";
import queryAllArticle from "../../plugins/queryArticle.js";


const props = defineProps(['info'])
const labelArr = props.info.label
let isRotate = ref('rotate(0)')

const isExist = (label) => {
  if (typeof labelArr !== 'undefined') {
    return labelArr.hasOwnProperty(label)
  }
}

const date = new Date(props.info.createTime)
props.info.createTime = date.toLocaleString()







</script>

<style scoped>
/*

::-webkit-scrollbar-corner {
  border-radius: 5px;
}
 */

.container {
  display: flex;
  flex-direction: row;
  //padding-left: 2rem;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  height: auto;
  width: 100%;
  min-height: 350px;
  min-width: 750px;
  max-width: 1024px;
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  position: relative;
  margin-bottom: 10vh;
  padding-left: 2rem;
}

/*
.right {
  width: 52%;
  height: 100%;
}
 */

.right img {
  width: 100%;
  height: 100%;
}


.createTime {
  color: rgba(0, 0, 0, 0.5);
  //margin-left: 5%;
  margin-top: 3%;
  display: flex;
  align-items: center;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 3%;
  //margin-left: 5%;
  margin-bottom: 3%;

}

.likeContainer {
  display: flex;
  width: 40px;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  left: 7%;
}

.label {
  position: absolute;
  bottom: 10%;
  left: calc(10% + 40px);
}

.likeIcon {
  width: 30px;
  height: 30px;
}

.introduction {
  padding-top: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  //text-indent: 2rem;
  margin-bottom: 10vh;
  font-weight: 500;
  height: auto;
  line-height: 1.8rem;
}

.content{
  padding-left: 3rem;
  padding-right: 3rem;
  margin-bottom: 10rem;
  height: auto;
  line-height: 1.8rem;
}

.createTimeFontIcon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.contentBtn {
  position: absolute;
  left: 45%;
  bottom: 0;
  overflow: hidden;
  width: 40px;
  height: 40px;
  transition: all 0.5s ease-in-out;
  transform-origin: center;
  transform: v-bind(isRotate);
}

.contentBtn:hover {
  cursor: pointer;
}

.btn {
  width: 100%;
  height: 100%;
}

</style>