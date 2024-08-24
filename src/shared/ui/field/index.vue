<script setup lang="ts">
interface Props{
    label: string;
    disabled: boolean;
    size: 's'|'m'|'l';
}
const props = defineProps<Props>()
</script>
<template>
    <component
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