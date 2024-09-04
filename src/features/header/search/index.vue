<script setup lang="ts">
import { Icon } from '@/shared/ui/icons'
import { Circle } from '@/shared/ui/circle'
</script>

<template>
    <input type="text">
    <Circle tagName="button" size="s" color="accent">
        <Icon tagName="svg" size="s" color="white" type="search"></Icon>
    </Circle>
</template>
<style scoped>
input {
    display: none;
}
.circle{
    width: 45px;
    height: 45px;
}
.circle:hover{
background: #3D4FB3;
}
</style>