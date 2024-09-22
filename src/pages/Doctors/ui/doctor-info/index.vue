<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { DoctorInfoBySlug } from '@/widgets/doctors/doctor-info-slug';

const route = useRoute();
const doctorSlug = computed(() => String(route.params.slug));
</script>

<template>
  <hr />
  <DoctorInfoBySlug :doctorSlug="doctorSlug" />
</template>

<style scoped>
hr {
  margin: 32px 0 50px;
  border: none;
  border-top: 1px solid #F1F2F4;
}
</style>
