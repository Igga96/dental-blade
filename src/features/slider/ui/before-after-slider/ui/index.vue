<script setup lang="ts">
import { Slider } from '@/shared/ui/slider';
import { useSwipe } from '@/shared/composables/useSwipe'
import { ref } from 'vue';

const itemsContainer = ref<HTMLElement | null>(null);
useSwipe({ elementRef: itemsContainer });
</script>
<template>
    <div class="before-after-slider__content" ref="itemsContainer">
        <div class="slider__item">
            <img src="@/assets/images/before_after/smile_1.png" alt="1">
        </div>
        <div class="slider__item">
            <img src="@/assets/images/before_after/smile_2.png" alt="2">
        </div>
        <div class="slider__item">
            <img src="@/assets/images/before_after/smile_3.png" alt="3">
        </div>
    </div>
</template>
<style lang="scss" scoped>
.before-after-slider__content {
    display: flex;
    justify-content: center;
    gap: 30px;
    max-width: 100%;

    .slider__item {
        border-radius: 20px;
        display: flex;
        width: 100%;
        touch-action: pan-y;
        transition: transform 0.3s ease;

        img {
            border-radius: 20px;
            max-height: 400px;
            position: relative;
        }
    }
}



@media screen and (max-width: 768px) {

    .before-after-slider__content {
        gap: 10px;

        .slider__item {
            border-radius: 17px;

            img {
                border-radius: 17px;
                max-height: 338px;
            }
        }
    }
}


@media screen and (max-width: 541px) {

    .before-after-slider__content {
        gap: 10px;

        .slider__item {
            border-radius: 30px;

            img {
                border-radius: 30px;
                max-height: 260px;
            }
        }
    }
}
</style>