<template>

  <div class="container">

    <div class="cardTop">
      <div class="avatar">
        <img src="../assets/avatar.jpg" alt="头像">
      </div>
      <el-divider />
      <div class="name font">
        <slot name="name"></slot>
      </div>
    </div>

    <div class="cardBottom">
      <div class="introduction font">
        <slot name="introduction"></slot>
      </div>

      <div class="birthday font">
        <slot name="birthday"></slot>
      </div>


      <div class="title font">
        联系方式：
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

</template>

<script setup>

const clickTo = (url) => {
  window.open(`${url}`)
}


</script>

<style scoped>

.container{
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

img{
  border-radius: 50%;
  width: 90%;
}

.font{
  font-size: 1.2rem;
  font-weight: 550;
  margin-bottom: 5%;
}

.title{
  margin-top: 5vh;
}

</style>