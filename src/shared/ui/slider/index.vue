<script setup lang="ts">
</script>

<template>
  <div class="slider">
      <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.slider {
  width: 100%;
  overflow: hidden;
  margin-left: 240px;
}

@media screen and (max-width: 1681px) {
  .slider {
    margin-left: 200px;
  }
}

@media screen and (max-width: 1441px) {
  .slider {
    margin-left: 110px;
  }
}


@media screen and (max-width: 769px) {
  .slider {
    margin-left: 45px;
  }

}

@media screen and (max-width: 541px) {
  .slider {
    margin-left: 20px;
  }
}
</style>
