<script setup lang="ts">
import { doctorsSliderCard } from '@/entities/doctors/ui/doctors-slider-card';
import { Slider } from '@/shared/ui/slider';
import { useSwipe } from '@/shared/composables/useSwipe';
import { ref } from 'vue';

const itemsContainer = ref<HTMLElement | null>(null);
const currentPosition = ref(0);
const slideDistance = 395;

useSwipe({ elementRef: itemsContainer });

const slideLeft = () => {
  currentPosition.value -= slideDistance;
};

const slideRight = () => {
  currentPosition.value += slideDistance;
};

defineExpose({
  slideLeft,
  slideRight
});
</script>

<template>
  <Slider>
    <div class="doctors-slider__container" ref="itemsContainer"
      :style="{ transform: `translateX(${currentPosition}px)` }">
      <doctorsSliderCard />
    </div>
  </Slider>
</template>

<style scoped>
.doctors-slider__container {
  display: flex;
  transition: transform 0.3s ease;
  gap: 10px;
  touch-action: pan-y;
            transition: transform 0.3s ease;
}
</style>
