<script setup lang="ts">
import { Header } from '@/widgets/header';
import { Container } from '@/shared/ui/container';
import { Breadcrumbs } from '@/features/breadcrumbs';
import { Map } from '@/widgets/section-map';
import { Footer } from '@/widgets/footer';
</script>
<template>
    <Header />
    <Container>
        <Breadcrumbs />
        <router-view />
    </Container>
    <Map />
    <Footer />
</template>