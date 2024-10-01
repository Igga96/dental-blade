<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Paragraph } from '../text/paragraph';
</script>
<template>
    <RouterLink to="/" class="logo">
        <Paragraph tag-name="span" size="xs" color="dark">
            logo
        </Paragraph>
    </RouterLink>
</template>
<style lang="scss" scoped>
.logo {
    display: flex;
    height: 45px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    background: #FFFF;
    width: 115px;
    border-radius: 50px;
    color: rgb(35, 38, 47);
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: center;

    .text {
        font-weight: 500;
    }
}
</style>