<script setup lang="ts">
import { Paragraph } from '@/shared/ui/text/paragraph';
import { RouterLink } from 'vue-router';
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const doctors = computed(() => store.getters['doctors/formattedDoctors']);
const firstDoctorCard = ref<HTMLElement | null>(null);
const emit = defineEmits(['updateWidth']);

onMounted(() => {
  if (firstDoctorCard.value) {
    const width = firstDoctorCard.value.offsetWidth;
    emit('updateWidth', width);
  }
});
</script>

<template>
  <div class="doctors-slider__container">
    <RouterLink 
      ref="firstDoctorCard" 
      v-for="doctor in doctors" 
      :key="doctor.id" 
      :to="`/doctors/${doctor.slug}`" 
      class="doctors-slider__content_item"
      :style="{ backgroundImage: `url(${doctor.imgPath})` }"
      :aria-label="`${doctor.firstName} ${doctor.lastName}`"
    >
      <div class="item__info">
        <Paragraph tagName="p" color="white" size="xxxl" class="doctor-name">
          {{ doctor.lastName }} {{ doctor.firstName }} {{ doctor.middleName }}
        </Paragraph>
        <Paragraph tagName="p" color="white" size="xs" class="doctor-specialty">
          {{ doctor.specialties }}
        </Paragraph>
        <p class="doctor-expierence">
          <Paragraph tagName="span" color="white" size="xs">{{ doctor.category }}</Paragraph>
          <Paragraph tagName="span" color="white" size="xs">{{ doctor.experienceText }}</Paragraph>
        </p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>
