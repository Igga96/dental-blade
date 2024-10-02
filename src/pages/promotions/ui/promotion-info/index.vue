<script setup lang="ts">
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

const promotionSlug = computed(() => String(route.params.slug));

const promotion = computed(() => store.getters['promotions/getPromotionBySlug'](promotionSlug.value));

watch(promotionSlug, () => {
    store.getters['promotions/getPromotionBySlug'](promotionSlug.value);
});
</script>

<template>
    <hr>
    <section class="promotion-info" v-if="promotion">
        <div class="photo">
            <img :src="promotion.imgPath" :alt="promotion.name">
        </div>
        <article>
            <h1>название промо</h1>
            <p>срок действия</p>
            <hr>
            <p>что входит в стоимость</p>
            <p>галочка + текст</p>
            <hr>
            <p>полные условия</p>
            <ul>
                <li>условие</li>
                <li>условие</li>
                <li>условие</li>
                <li>условие</li>
                <li>условие</li>
            </ul>
            <hr>
            <button>записаться на прием</button>
        </article>
    </section>
    <div v-else>
        <p>Акция не найдена</p>
    </div>
</template>
<style lang="scss" scoped>
hr {
    margin: 30px 0 50px;
    border: none;
    border-top: 1px solid #F1F2F4;
}

.promotion-info {
    display: flex;

    article {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
}
</style>
