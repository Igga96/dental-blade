<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { RouterLink } from 'vue-router';

const store = useStore();

const promotions = computed(() => store.state.promotions.PromotionsData);
</script>

<template>
    <Router-link class="promotion__item" :to="`/promotions/${item.slug}`" v-for="item in promotions" :key="item.id">
        <img :src="item.imgPath" :alt="item.name">
    </Router-link>
</template>
<style lang="scss">
.promotion__item {
    img {
        height: auto;
        min-width:100%;
    }
}
</style>
