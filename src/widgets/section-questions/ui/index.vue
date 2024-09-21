<script setup lang="ts">
import { Container } from '@/shared/ui/container';
import { Heading } from '@/shared/ui/text/heading';
import {QuestionsList} from '@/entities/questions'
</script>
<template>
    <section class="section-questions">
        <Container tagName="div" size="m">
            <Heading tagName="h2" regular size="xl">у нас часто спрашивают?</Heading>
            <QuestionsList/>
        </Container>
    </section>
</template>
<style lang="scss" scoped>
@import './style.scss';
</style>