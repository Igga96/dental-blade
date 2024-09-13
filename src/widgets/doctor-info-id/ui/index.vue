<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { Button } from '@/shared/ui/button';
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
hr {
    margin: 32px 0 50px;
}

.section-doctor {
    display: grid;
    gap: 0 50px;
    grid-template-columns: 1fr 1fr;

    hr {
        margin: 40px 0;
    }

    .doctor-photo {
        position: absolute;
        display: block;
        width: 490px;
        height: 600px;
        border-radius: 10px;
        background-position: 0 10%;
        background-repeat: no-repeat;
        background-size: 100%;
        grid-column: 1;
    }

    hr {
        grid-column: 2;
    }

    .doctor-info {
        grid-column: 2;
    }

    .doctor-education {
        grid-column: 2;
    }

    .doctor-training {
        grid-column: 2;
    }

    .rating {
        grid-column: 2;
    }

    .button {
        grid-column: 2;
    }
}
</style>