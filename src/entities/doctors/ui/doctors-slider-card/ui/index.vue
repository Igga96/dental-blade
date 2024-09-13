<script setup lang="ts">
import { Paragraph } from '@/shared/ui/text/paragraph';
import { RouterLink } from 'vue-router';

import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const doctors = computed(() => store.getters['doctors/formattedDoctors']);
</script>
<template>
    <RouterLink :to="`/doctors/${doctor.id}`" v-for="doctor in doctors" :key="doctor.id" :style="{ backgroundImage: `url(${doctor.imgPath})` }"
        :aria-label="`${doctor.firstName} ${doctor.lastName}`" class="doctors-slider__content_item">
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
</template>
<style scoped lang="scss">
@import './style.scss';
</style>