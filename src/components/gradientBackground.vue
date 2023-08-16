<template>

  <div class="container"></div>

</template>

<script setup>

</script>

<style scoped>

.container{
  background-image: linear-gradient(
    125deg,#2c3e50,#27ae60,
    #2980b9,#e74c3c,#8e44ad
  );
  width: 100%;
  height: 100%;
  background-size: 400%;
  animation: backgroundMove 15s infinite;
}


@keyframes backgroundMove {
  0%{
    background-position: 0 50%;
  }


  50%{
    background-position: 100% 50%;
  }

  100%{
    background-position: 0 50%;
  }
}

</style>