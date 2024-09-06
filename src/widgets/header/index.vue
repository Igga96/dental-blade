<script setup lang="ts">
import { Logo } from '@/shared/ui/logo';
import { Navigation } from '@/features/header/navigation';
import { Search } from '@/features/header/search'
import { Glasses } from '@/features/header/glasses'
import { Burger } from '@/features//header/burger'
</script>
<template>
    <header class="header">
        <Logo />
        <div class="header__menu">
            <Navigation class="header__menu-left" />
            <div class="header__menu-right">
                <Search />
                <Glasses />
                <Burger class="button-burger" />
            </div>
        </div>
    </header>
</template>
<style scoped lang="scss">
.header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 25px;
}

.button-burger {
    display: none;
}
.header__menu{
    display: flex;
    gap: 122px;
}
.header__menu-right {
    display: flex;
    gap: 10px;
}

@media screen and (max-width: 768px) {
    .button-burger {
        display: block;
    }
}

@media screen and (max-width: 375px) {
    .header {
        padding: 0 20px;
        margin-top: 25px;
    }
}
</style>