<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
    tagName: 'a' | 'router-link';
    size: 'xs' | 's' | 'm' | 'l' | 'xl';
}
const props = defineProps<Props>()
</script>
<template>
    <component
    :is = "props.tagName"
    :class="['nav-link', size ? `size_${size}` : '']">
        <slot></slot>
    </component>
</template>
<style scoped>  
.nav-link{
    padding: 12px 30px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.15);
}
</style>