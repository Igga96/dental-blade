<script setup lang="ts">
import { Header } from '@/widgets/header';
import { Container } from '@/shared/ui/container';
import { Breadcrumbs } from '@/features/breadcrumbs';
import { Map } from '@/widgets/map';
import { Footer } from '@/widgets/footer';
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
    <Header />
    <Container>
        <Breadcrumbs :dynamicLabel="promotion?.name" />
        <router-view />
    </Container>
    <Map />
    <Footer />
</template>
