<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Paragraph } from '@/shared/ui/text/paragraph';
</script>
<template>
    <div class="breadcumps">
        <RouterLink to="/">
            <Paragraph tagName="span" size="xs" color="dark-gray">
                Главная
            </Paragraph>
        </RouterLink>
        <Paragraph tagName="span" size="xs" color="dark-gray">
            &#8250;
        </Paragraph>
        <RouterLink to="/prices">
            <Paragraph tagName="span" size="xs" color="dark-gray">
                Кейсы
            </Paragraph>
        </RouterLink>
    </div>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>