<template>

  <div class="container">

    <div class="left">

      <div class="createTime">
        <!--      <img src="../../assets/time.png" alt="发布时间" class="createTimeFontIcon">-->
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
        <!--      <slot name="createTime"></slot>-->
        {{ props.info.createTime }}

      </div>

      <div class="title">
        <!--      <slot name="title"></slot>-->
        {{ props.info.title }}
      </div>

      <div class="introduction">
<!--              <slot name="introduction.md"></slot>-->
        <card-views :content="props.info.introduction"></card-views>
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

    <div class="right">

      <img :src="props.info.img" v-if="props.info.img" alt="图片">

    </div>

  </div>

</template>

<script setup>

import {onMounted} from "vue";
import Like from "../like.vue";
import ShowLabel from "../showLabel.vue";
import CardViews from "../cardViews.vue";


const props = defineProps(['info'])
const labelArr = props.info.label
let labelDOM


onMounted(() => {
  // labelDOM = document.getElementById('label')


})

const isExist = (label) => {
  if (typeof labelArr !== 'undefined') {
    return labelArr.hasOwnProperty(label)
  }


}


</script>

<style scoped>

::-webkit-scrollbar-corner {
  border-radius: 5px;
}

.container {
  display: flex;
  flex-direction: row;
  padding-left: 2rem;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  height: 100%;
  width: 100%;
  min-height: 350px;
  min-width: 750px;
  max-width: 1024px;
  transition: all 0.5s ease-in-out;
  overflow: hidden;
//flex-grow: 1; //scrollbar-width: none; //-ms-overflow-style: none;
}


.right {
  width: 52%;
  height: 100%;
}

.right img {
  width: 100%;
  height: 100%;
}


.createTime {
  color: rgba(0, 0, 0, 0.5);
  margin-left: 5%;
  margin-top: 3%;
  display: flex;
  align-items: center;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 3%;
  margin-left: 5%;
  margin-bottom: 3%;
}

.likeContainer {
  display: flex;
  width: 40px;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 7%;
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
  /*font-size: 1.2rem;*/
  padding-top: 1rem;
  padding-left: 1rem;
  font-weight: 500;
//text-indent: 2rem; height: 20vh; word-break: break-all; //margin-left: 2rem; padding-right: 2rem; line-height: 1.5rem;
}

.createTimeFontIcon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

</style>