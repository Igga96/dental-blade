<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
    tagName: 'button' ;
    size: 's' | 'm' ;
}
const props = defineProps<Props>()
</script>
<template>
    <component 
    :is="props.tagName" 
    :class="['button', size ? `button__size-${size}` : '']">
        <slot></slot>
    </component>
</template>
<style scoped>
.button{
    background: #4963FF;
    border-radius: 90px;
    color: white;
    border:none;
}
.button__size-s{
padding: 18.5px 36px;
}
</style>