<script lang="ts" setup>
import { defineProps } from 'vue';

interface Props {
    tagName: 'h1' | 'h2' | 'h3' | 'h4';
    regular: boolean;
    size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
}
const props = defineProps<Props>()
</script>

<template>
    <component :is="props.tagName"
        :class="['heading', size ? `heading__size-${size}` : '', regular ? 'heading-regular' : '']">
        <slot></slot>
    </component>
</template>
<style scoped>
h1, h2, h3, h4{
    font-weight: 400;
    color: #23262F;
    
}
.heading__size-xs {
    font-size: 24px;
    line-height: 32px;
}

.heading__size-s {
    font-size: 40px;
    line-height: 40px;
}

.heading__size-m {
    font-size: 40px;
    line-height: 40px;
}

.heading__size-l {
    font-size: 40px;
    line-height: 40px;
}

.heading__size-xl {
    font-size: 70px;
    line-height: 70px;
}

.heading__size-xxl {
    font-size: 70px;
    line-height: 70px;
}


@media screen and (max-width: 768px) {
    .heading__size-xs {
        font-size: 20px;
        line-height: 28px;
    }

    .heading__size-s {
        font-size: 20px;
        line-height: 28px;
    }

    .heading__size-m {
        font-size: 24px;
        line-height: 32px;
    }

    .heading__size-xl {
        font-size: 40px;
        line-height: 40px;
    }

    .heading__size-xxl {
        font-size: 70px;
        line-height: 70px;
    }
}

@media screen and (max-width: 541px) {
    .heading__size-xxl {
        font-size: 40px;
        line-height: 40px;
    }
}
</style>