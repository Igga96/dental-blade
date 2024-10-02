<script setup lang="ts">
import { Slider } from '@/shared/ui/slider';
import { Promotions } from '@/entities/promotions'
import { useSwipe } from '@/shared/composables/useSwipe'
import { ref } from 'vue';

const itemsContainer = ref<HTMLElement | null>(null);
useSwipe({ elementRef: itemsContainer });
</script>

<template>
    <Slider>
        <div class="implantation-slider__container" ref="itemsContainer">
            <Promotions />
        </div>
    </Slider>
</template>
<style lang="scss" scoped>
.implantation-slider__container {
    display: flex;
    position: relative;
    left: 0;
    transition: left 0.3s ease;
    display: flex;
    gap: 10px;


    .promotion__item {
        touch-action: pan-y;
        transition: transform 0.3s ease;
    }
}


@media screen and (max-width: 541px) {
    .implantation-slider__container {
        .promotion__item {
            img {
                height: 250px;
                width: auto;
            }
        }
    }
}
</style>