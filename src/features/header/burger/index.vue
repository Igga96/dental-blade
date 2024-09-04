<script setup lang="ts">
import { Icon } from '@/shared/ui/icons'
import { Circle } from '@/shared/ui/circle'
</script>

<template>
    <Circle tagName="button" size="s" color="opacity">
        <Icon type="burger" color='none'></Icon>
    </Circle>
</template>
<style scoped>
.circle {
    width: 45px;
    height: 45px;
}
</style>