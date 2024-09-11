<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { useRoute } from 'vue-router';

const route = useRoute();

const breadcrumbsLink = {
    label: route.name,
    path: route.path
};
</script>
<template>
    <div class="breadcrumbs">
        <RouterLink to="/" class="breadcrumbs__link">
            <Paragraph tagName="span" size="xs" color="dark-gray">
                Главная
            </Paragraph>
        </RouterLink>
        <Paragraph tagName="span" size="xs" color="dark-gray">
            &#8250;
        </Paragraph>
        <RouterLink :to="breadcrumbsLink.path" class="breadcrumbs__link">
            <Paragraph tagName="span" size="xs" color="dark-gray">
                {{ breadcrumbsLink.label }}
            </Paragraph>
        </RouterLink>
    </div>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>