<script setup lang="ts">
import { Header } from '@/widgets/header';
import { Container } from '@/shared/ui/container';
import { Breadcrumbs } from '@/features/breadcrumbs';
import { Map } from '@/widgets/map';
import { Footer } from '@/widgets/footer';

import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore();
const doctorsData = computed(() => store.getters['doctors/formattedDoctors']);
</script>
<template>
    <Header />
    <Container>
        <Breadcrumbs :dynamicLabel="doctorsData?.fullName" />
        <router-view />
    </Container>
    <Map />
    <Footer />
</template>