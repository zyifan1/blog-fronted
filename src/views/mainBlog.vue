<template>

  <div class="container" id="container">
    <gradient-background class="background"></gradient-background>

    <div class="mainTo" id="mainTo">
<!--      <h1 class="mainTitle">欢迎光临淘气小周的博客</h1>-->
      <div class="title">欢迎光临淘气小周的博客</div>
      <btn class="mainBtn" @click="toBlog">进入</btn>
    </div>

    <div class="mainBlog" id="mainBlog">
      <blog-info class="blogInfo"></blog-info>
    </div>

  </div>

</template>

<script setup>
import GradientBackground from '../components/gradientBackground.vue'
import Btn from '../components/uiverse/btn.vue'
import {onMounted} from "vue";
import BlogInfo from "../components/blogInfo.vue";

// DOM元素
let mainTo = ''
let mainBlog = ''
let container = ''


onMounted(() => {
  // 初始化DOM
  mainTo = document.getElementById('mainTo')
  mainBlog = document.getElementById('mainBlog')
  container = document.getElementById('container')

  // 先移除，之后在append
  mainBlog.remove()
})


/**
 * 通过点击，添加class实现动画
 * 定时器，在执行完动画后移除该元素，方便之后布局
 */
const toBlog = () => {
  mainTo.classList.add('mainTitleAnimation')
  setTimeout(() => {
    mainTo.remove()
    container.appendChild(mainBlog)
    mainBlog.classList.add('mainBlogAnimation')
  }, 2000)
  // console.log(mainBlog);
}
</script>

<style scoped>

.container {
  --time: 2s;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //overflow: hidden;
}

.title{
  font-size: 2rem;
  font-weight: 600;
}

.container::-webkit-scrollbar {
  width: 0; /* 隐藏滚动条 */
  background: transparent; /* 设置滚动条背景为透明 */
}

.background {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
}

.mainBlog{
  width: 100vw;
  height: 100vh;
}

.mainTo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


/*动画设置*/
.mainTitleAnimation {
  animation: mainTitle var(--time) forwards;
}

.mainBlogAnimation {
  /*opacity: 0;*/
  animation: mainBlog var(--time) forwards;
}

@keyframes mainTitle {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes mainBlog {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}


.mainBtn {
  margin-top: 5vh;
}

.blogInfo{
  width: 100vw;
  height: 100vh;
  flex-direction: row;
}

</style>