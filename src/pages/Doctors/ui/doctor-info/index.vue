<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { DoctorInfoById } from '@/widgets/doctors/doctor-info-id'
const route = useRoute();

const doctorId = computed(() => Number(route.params.id));

</script>
<template>
  <hr />
  <DoctorInfoById :doctorId="doctorId" />
</template>
<style scoped>
hr {
  margin: 32px 0 50px;
  border: none;
  border-top: 1px solid #F1F2F4;
}
</style>
