<script setup lang="ts">
import { Header } from '@/widgets/header';
import { Container } from '@/shared/ui/container';
import { Heading } from '@/shared/ui/text/heading';
import { Sidebar } from '@/features/sidebar';
import { Pagination } from '@/features/pagination';
import { Footer } from '@/widgets/footer';
import { Map } from '@/widgets/section-map';
import { Case } from '@/entities/cases/';
import { Breadcrumbs } from '@/features/breadcrumbs'

import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const filteredCases = computed(() => store.getters['cases/filteredCases']);
const uniqueCategories = computed(() => store.getters['cases/uniqueCategories']);
const shouldShowPagination = computed(() => store.getters['cases/shouldShowPagination']);
const selectedCategory = computed(() => store.state.cases.selectedCategory);

const handleCategorySelected = (category: string | null) => {
    store.dispatch('sidebar/selectCategory', category);
};

</script>

<template>
    <Header />
    <Container>
        <Breadcrumbs />
        <Heading tagName="h2" regular size="xxl">
            Кейсы
        </Heading>
        <hr>
        <section class="section-cases">
            <Sidebar :data="uniqueCategories" :selectedCategory="selectedCategory"
                @category-selected="handleCategorySelected" />
            <div class="section-cases__content">
                <div class="content__items">
                    <Case :casesData="filteredCases" />
                </div>
                <Pagination v-if="shouldShowPagination" />
            </div>
        </section>
    </Container>
    <Map />
    <Footer />
</template>

<style lang="scss" scoped>
@import './style.scss';

h2 {
    margin: 50px 0 32px;
}

hr {
    color: #B1B5C3;
}
</style>