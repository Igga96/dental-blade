<script setup lang="ts">
import { Header } from '@/widgets/header';
import { Container } from '@/shared/ui/container';
import { Breadcrumbs } from '@/features/breadcrumbs';
import { Map } from '@/widgets/map';
import { Footer } from '@/widgets/footer';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';

const route = useRoute();
const store = useStore();

const caseSlug = computed(() => String(route.params.slug));
const caseData = computed(() => store.getters['cases/getCaseBySlug'](caseSlug.value));

</script>
<template>
    <Header />
    <Container>
        <Breadcrumbs :dynamicLabel="caseData?.name" />
        <router-view />
    </Container>
    <Map />
    <Footer />
</template>