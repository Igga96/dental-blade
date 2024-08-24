<script lang="ts" setup>
import { defineProps } from 'vue';

interface Props {
    tagName: 'span' | 'p' ;
    medium: boolean;
    large: boolean;
    size: 'xs' | 's' | 'm' | 'l';
}
const props = defineProps<Props>()
</script>

<template>
    <component :is="props.tagName" 
    :class="['text', size ? `text-size_${size}` : '', medium ? 'text-medium' : '',  large ? 'text-large' : '']">
        <slot></slot>
    </component>
</template>
<style scoped>
.text-size_xs{
    font-size: 14px;
    line-height: 19px;
}
.text-size_s{
    font-size: 16px;
    line-height: 24px;
}
.text-size_m{
    font-size: 18px;
    line-height: 24px;
}
.text-size_l{
    font-size: 20px;
    line-height: 28px;
    
}

.text{
    font-weight: 400;
}
.text-medium {
    font-weight: 500;
}
.text-large{
    font-weight: 600;
}


</style>