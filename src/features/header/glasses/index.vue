<script setup lang="ts">
import { Icon } from '@/shared/ui/icons'
import { Circle } from '@/shared/ui/circle'
</script>
<template>
    <Circle tagName="button" size="s" color="accent">
        <Icon tagName="svg" size="s" type="glasses" color="none"></Icon>
    </Circle>
</template>
<style scoped>
.circle {
    width: 45px;
    height: 45px;
}
.circle:hover{
background: #3D4FB3;
}
</style>