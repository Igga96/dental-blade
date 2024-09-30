<script lang="ts" setup>
import { defineProps } from 'vue';

interface Props {
    tagName: 'span' | 'p';
    color: 'white' | 'dark' | 'dark-gray' | 'accent';
    size: 'xs' | 's' | 'm' | 'l'| 'xl'| 'xxl'| 'xxxl';
}
const props = defineProps<Props>()
</script>

<template>
    <component :is="props.tagName" :class="['text', size ? `text-size-${size}` : '', color ? `text-color-${color}` : '']">
        <slot></slot>
    </component>
</template>
<style scoped>
.text {
    font-weight: 400;
}

.text-color-white {
    color: #FFFFFF;
}

.text-color-dark {
    color: #23262F;
}

.text-color-dark-gray {
    color: #747B8F;
}

.text-color-accent {
    color: #4963FF
}

.text-size-xs {
    font-size: 16px;
    line-height: 24px;
}

.text-size-s {
    font-size: 18px;
    line-height: 28px;
}

.text-size-m {
    font-size: 18px;
    line-height: 28px;
}

.text-size-l {
    font-size: 20px;
    line-height: 28px;

}

.text-size-xl {
    font-size: 20px;
    line-height: 28px;

}

.text-size-xxl {
    font-size: 20px;
    line-height: 28px;

}

.text-size-xxxl {
    font-size: 24px;
    line-height: 32px;

}

@media screen and (max-width: 768px) {
    .text-size-xs {
        font-size: 14px;
    }

    .text-size-s {
        font-size: 14px;
        line-height: 24px;
    }

    .text-size-m {
        font-size: 16px;
        line-height: 24px;
    }

    .text-size-l {
        font-size: 16px;
        line-height: 24px;

    }

    .text-size-xl {
        font-size: 20px;
        line-height: 28px;

    }

    .text-size-xxl {
        font-size: 20px;
        line-height: 28px;

    }

    .text-size-xxxl {
        font-size: 24px;
        line-height: 32px;

    }

}

@media screen and (max-width: 375px) {
    .text-size-xl {
        font-size: 16px;
        line-height: 24px;

    }
}
</style>