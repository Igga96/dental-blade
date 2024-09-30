<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
    tagName: 'span' | 'button';
    color: 'accent' | 'white' | 'light-blue-first' | 'light-blue-second' | 'light-gray' | 'gray' | 'opacity';
    size:  's' | 'm' | 'l' ;
}
const props = defineProps<Props>()
</script>
<template>
    <component :is="props.tagName" :class="['circle', size ? `circle__size-${size}` : '', color ? `circle-${color}` : '']">
        <slot></slot>
    </component>
</template>
<style lang="scss" scoped>
.circle {
    border-radius: 90px;
    border: none;
}

.circle-accent {
    background-color: #4963FF;
}

.circle-opacity {
    background: rgba(0, 0, 0, 0.15);
}

.circle-white {
    background-color: #FFFF;
}

.circle-light-blue-first {
    background-color: #FCFCFD;
}

.circle-ligth-blue-second {
    background-color: #F1F3F9;
}

.circle-light-gray {
    background-color: #F6F6F6;
}

.circle-gray {
    background: rgba(37, 35, 47, 0.05);
}

.circle__size-s {
    width: 65px;
    height: 65px;
}

.circle__size-m {
    width: 68px;
    height: 68px;
}

.circle__size-l {
    width: 90px;
    height: 90px;
}

@media screen and (max-width: 768px) {
    .circle__size-s {
        width: 50px;
        height: 50px;
    }

    .circle__size-l {
        width: 60px;
        height: 60px;
    }

}

@media screen and (max-width: 375px) {

    .circle__size-m {
        width: 40px;
        height: 40px;
    }

}
</style>