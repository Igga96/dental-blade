<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
    tagName: 'span' | 'button';
    color: 'accent' | 'white' | 'light-blue-first' | 'light-gray' | 'opacity';
    size: 'xs' | 's' | 'm' | 'l' | 'xl';
}
const props = defineProps<Props>()
</script>
<template>
    <component 
    :is="props.tagName" 
    :class="['circle', size ? `circle__size-${size}` : '', color ? `circle-${color}` : '']">
        <slot></slot>
    </component>
</template>
<style lang="scss" scoped>
.circle {
    border-radius: 90px;
    border: none;
}

.circle__size-s {
    width: 30px;
    height: 30px;
}

.circle__size-m {
    width: 45px;
    height: 45px;
}
.circle__size-xl {
    width: 90px;
    height: 90px;
}

.circle-accent {
    background-color: #4963FF;
}

.circle-opacity {
    background: rgba(0, 0, 0, 0.15);
}
.circle-white{
background-color: #FFFF;
}
</style>