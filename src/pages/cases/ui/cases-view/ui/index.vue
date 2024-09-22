<script setup lang="ts">
import { Header } from '@/widgets/header';
import { Container } from '@/shared/ui/container';
import { Breadcrumbs } from '@/features/breadcrumbs';
import { Map } from '@/widgets/map';
import { Footer } from '@/widgets/footer';
import { useCaseData } from '@/entities/cases/ui/case-info/model/case.model';
const { caseData} = useCaseData();
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