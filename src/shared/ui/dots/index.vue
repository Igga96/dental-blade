<template>
<span class="dots"></span>
</template>
<style lang="scss" scoped>
.dots {
          display: inline-block;
          flex-grow: 1;
          position: relative;
          height: 1px;

          &::after {
            content: '...........................................................................................................................................................................................................................................................................................';
            white-space: nowrap;
            position: absolute;
            top: -3px;
            transform: translateY(-50%);
          }
        }
@media screen and (max-width:541px){
  .dots{
    display: none;
  }
}
</style>
