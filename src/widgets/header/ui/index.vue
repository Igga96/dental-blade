<script setup lang="ts">
import { Logo } from '@/shared/ui/logo';
import { Navigation } from '@/features/header/navigation';
import { Search } from '@/features/header/search'
import { Glasses } from '@/features/header/glasses'
import { Burger } from '@/features//header/burger'

import { reactive } from 'vue';

const navItems = reactive([
    { id: 0, name: 'О клинике', link: '/' },
    { id: 1, name: 'Врачи', link: '/doctors' },
    { id: 2, name: 'Услуги', link: '/services' },
    { id: 3, name: 'Цены', link: '/prices' },
    { id: 4, name: 'Кейсы', link: '/cases' },
])
</script>
<template>
    <header class="header">
        <Logo class="header__logo" />
        <div class="header__menu">
            <Navigation :navItems="navItems" class="menu-left" />
            <div class="menu-right">
                <Search />
                <Glasses />
                <Burger />
            </div>
        </div>
    </header>
</template>
<style scoped lang="scss">
@import './style.scss'
</style>