<script setup lang="ts">
import { Links } from '@/shared/ui/link'

</script>
<template>
    <nav>
        <Links tagName="router-link" size="s" to="/about">Главная</Links>
        <links tagName="router-link" size="s" to="/doctors">Врачи</links>
        <links tagName="router-link" size="s" to="/services">Услуги</links>
        <links tagName="router-link" size="s" to="/prices">Цены</links>
        <links tagName="router-link" size="s" to="/about">Кейсы</links>
    </nav>
</template>
<style scoped>
nav {
    display: flex;
    gap: 5px;
}

@media screen and (max-width: 768px) {
    nav{
        display: none;
    }
}
</style>