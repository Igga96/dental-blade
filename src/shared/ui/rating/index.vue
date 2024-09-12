<template>
    <div class="rating">
        <span class="star" data-value="1">&#9733;</span>
        <span class="star" data-value="2">&#9733;</span>
        <span class="star" data-value="3">&#9733;</span>
        <span class="star" data-value="4">&#9733;</span>
        <span class="star" data-value="5">&#9733;</span>
    </div>
</template>
<style scoped lang="scss">
.rating {
  /*direction: rtl;*/

  .star {
    font-size: 30px;
    color: #ccc;
    cursor: pointer;
  }

  .star:hover,
  .star:hover~.star {
    color: gold;
  }
}</style>