<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { DoctorInfo } from '@/entities/doctors/ui/doctor-info/';
import { DoctorEducation } from '@/entities/doctors/ui/doctor-education'
import { DoctorTraining } from '@/entities/doctors/ui/doctor-training'
import { DoctorProfile } from '@/entities/doctors/ui/doctor-profile'
import { DoctorReviews } from '@/features/doctor-reviews'

const store = useStore();
const route = useRoute();

const doctorId = computed(() => Number(route.params.id));

const doctor = computed(() => store.getters['doctors/getDoctorById'](doctorId.value));
</script>
<template>
    <section v-if="doctor" class="section-doctor">
        <div class="doctor-photo" :style="{ backgroundImage: `url(${doctor.imgPath})` }" :aria-label="`${doctor.fullName}`">
        </div>
        <article class="doctor-info">
            <DoctorInfo :doctorId="doctorId" />
            <hr>
            <DoctorProfile :doctorId="doctorId" />
        </article>
        <hr>
        <DoctorEducation :doctorId="doctorId" />
        <hr>
        <DoctorTraining :doctorId="doctorId" />
        <hr>
        <DoctorReviews />
    </section>
    <div v-else>
        <p>Доктор не найден.</p>
    </div>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>