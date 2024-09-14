<script setup lang="ts">
import { Heading } from '@/shared/ui/text/heading';
import { Sidebar } from '@/features/sidebar';
import { Pagination } from '@/features/pagination';
import { CasesList } from '@/entities/cases/ui/cases-list';

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
    <Heading tagName="h2" regular size="xxl">
        Кейсы
    </Heading>
    <hr>
    <section class="section-cases">
        <Sidebar :data="uniqueCategories" :selectedCategory="selectedCategory"
            @category-selected="handleCategorySelected" />
        <div class="section-cases__content">
            <div class="content__items">
                <CasesList :casesData="filteredCases" />
            </div>
            <Pagination v-if="shouldShowPagination" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import './style.scss';

h2 {
    margin-top: 50px;
}

hr {
    margin-top: 32px;
    color: #B1B5C3;
}
</style>