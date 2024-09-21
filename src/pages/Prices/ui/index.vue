<script setup lang="ts">
import { Heading } from '@/shared/ui/text/heading';
import { Header } from '@/widgets/header';
import { Pagination } from '@/features/pagination';
import { Footer } from '@/widgets/footer';
import { Container } from '@/shared/ui/container';
import { Map } from '@/widgets/map';
import { Sidebar } from '@/features/sidebar';
import { Price } from '@/entities/price/';
import { Breadcrumbs } from '@/features/breadcrumbs'

import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const filteredPrices = computed(() => store.getters['prices/filteredPrices']);
const uniqueCategories = computed(() => store.getters['prices/uniqueCategories']);
const shouldShowPagination = computed(() => store.getters['prices/shouldShowPagination']);
const selectedCategory = computed(() => store.state.prices.selectedCategory);

const handleCategorySelected = (category: string | null) => {
  store.dispatch('sidebar/selectCategory', category);
};
</script>
<template>
  <Header />
  <Container>
    <Breadcrumbs />
    <Heading tagName="h2" regular size="xxl">
      стоимость услуг
    </Heading>
    <hr>
    <section class="section-prices">
      <Sidebar :data="uniqueCategories" :selectedCategory="selectedCategory"
        @category-selected="handleCategorySelected" />
      <div class="section-prices__content">
        <Price :pricesData="filteredPrices" />
        <Pagination v-if="shouldShowPagination" />
      </div>
    </section>
  </Container>
  <Map />
  <Footer />
</template>
<style scoped lang="scss">
@import './style.scss';
</style>