<script setup lang="ts">
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { DoctorInfo } from '@/entities/doctors/ui/doctor-info/';
import { DoctorEducation } from '@/entities/doctors/ui/doctor-education';
import { DoctorTraining } from '@/entities/doctors/ui/doctor-training';
import { DoctorProfile } from '@/entities/doctors/ui/doctor-profile';
import { DoctorReviews } from '@/features/doctor-reviews';

const store = useStore();
const route = useRoute();

const doctorSlug = computed(() => String(route.params.slug));

const doctor = computed(() => store.getters['doctors/getDoctorBySlug'](doctorSlug.value));
watch(doctorSlug, () => {
  store.getters['doctors/getDoctorBySlug'](doctorSlug.value);
});
</script>

<template>
    <section v-if="doctor" class="section-doctor">
        <div class="doctor-info doctor-info_left">
            <div class="doctor-photo" :style="{ backgroundImage: `url(${doctor.imgPath})` }"
                :aria-label="`${doctor.fullName}`" />
            <div class="doctor-info__hidden-content">
                <DoctorInfo :doctor="doctor" />
                <hr>
                <DoctorProfile :doctor="doctor" />
            </div>
        </div>
        <article class="doctor-info doctor-info_right">
            <DoctorInfo :doctor="doctor" />
            <hr class="line-hidden">
            <DoctorProfile :doctor="doctor" />
            <hr class="line-hidden">
            <DoctorEducation :doctor="doctor" />
            <hr>
            <DoctorTraining :doctor="doctor" />
            <hr>
            <DoctorReviews />
        </article>
    </section>
    <div v-else>
        <p>Доктор не найден.</p>
    </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>
