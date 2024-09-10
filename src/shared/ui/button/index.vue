<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
    tagName: 'button';
    size: 's' | 'xs';
    color: 'white' | 'accent';
    type: 'none' | 'circle'
}
const props = defineProps<Props>()
</script>
<template>
    <component :is="props.tagName"
        :class="['button', size ? `button__size-${size}` : '', color ? `button__color-${color}` : '', , type ? `button__type-${type}` : '']">
        <slot></slot>
    </component>
</template>
<style scoped>
.button {
    border-radius: 90px;
    border: none;
    font-size: 18px;
    line-height: 21.78px;
    font-weight: 500;
}

.button:hover {
    background: #3D4FB3;
    color: white;
}

.button__color-accent {
    background: #4963FF;
    color: white;
}

.button__color-white {
    background: #ffff;
    border: 1px solid rgb(177, 181, 195);
}

.button__size-s {
    padding: 19.13px 36px;
    height: 60px;
}
.button__size-xs {
    padding: 10px 20px;
    height: 50px;
}

.button__type-circle {
    width: 50px;
    border-radius: 30px;
    padding: 0;
}
</style>