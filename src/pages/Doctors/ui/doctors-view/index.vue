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

const doctorSlug = computed(() => String(route.params.slug));

const doctor = computed(() => store.getters['doctors/getDoctorBySlug'](doctorSlug.value));
watch(doctorSlug, () => {
  store.getters['doctors/getDoctorBySlug'](doctorSlug.value);
});
</script>
<template>
    <Header />
    <Container>
        <Breadcrumbs :dynamicLabel="doctor?.fullName" />
        <router-view />
    </Container>
    <Map />
    <Footer />
</template>