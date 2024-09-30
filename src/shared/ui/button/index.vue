<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
    tagName: 'button' ;
    size: 's' | 'm' ;
    color: 'white' | 'accent';
}
const props = defineProps<Props>()
</script>
<template>
    <component 
    :is="props.tagName" 
    :class="['button', size ? `button__size-${size}` : '', color? `button__color-${color}` : '']">
        <slot></slot>
    </component>
</template>
<style scoped>
.button{
    border-radius: 90px;
    border:none;
    font-size: 18px;
    line-height: 21.78px;
    font-weight: 500;
}
.button:hover{
    background: #3D4FB3;
}
.button__color-accent{
    background: #4963FF;
    color: white;
}
.button__color-white{
    background: #ffff;
    color: #23262F;
}


.button__size-s{
padding: 19.13px 36px;
max-height: 60px;
}
</style>