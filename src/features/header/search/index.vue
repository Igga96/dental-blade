<script setup lang="ts">
import { Icon } from '@/shared/ui/icons'
import { Circle } from '@/shared/ui/circle'
</script>

<template>
    <input type="text">
        <Circle tagName="button" size="m" color="accent">
            <Icon tagName="svg" size="s" color="white" type="search"></Icon>
        </Circle>
</template>
<style scoped>
input {
    display: none;
}
</style>