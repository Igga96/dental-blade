<script setup lang="ts">
import { doctorsSliderCard } from '@/entities/doctors/ui/doctors-slider-card';
import { Slider } from '@/shared/ui/slider';
import { useSwipe } from '@/shared/composables/useSwipe';
import { ref } from 'vue';

const itemsContainer = ref<HTMLElement | null>(null);
useSwipe({ elementRef: itemsContainer });

</script>

<template>
  <Slider>
    <div class="doctors-slider__container" ref="itemsContainer">
      <doctorsSliderCard />
    </div>
  </Slider>
</template>

<style scoped>
.doctors-slider__container {
  display: flex;
  position: relative;
  left: 0;
  transition: left 0.3s ease;
  gap: 10px;
}
</style>
