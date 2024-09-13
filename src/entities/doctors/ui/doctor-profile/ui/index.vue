<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { Paragraph } from '@/shared/ui/text/paragraph';

interface Props {
    doctorId: number;
}
const props = defineProps<Props>();
const store = useStore();
const doctor = computed(() => store.getters['doctors/getDoctorById'](props.doctorId));
</script>

<template>
    <div class="doctor-profile">
        <Paragraph tagName="p" size="xxl" color="dark" class="title">
            профиль лечения
        </Paragraph>
        <ul class="profile-list">
            <li v-for="item in doctor.treatmentProfile" :key="item.id" class="item">
                <Paragraph tagName="span" size="xs" color="dark" class="item__percent">
                    {{ item.percent }}%
                </Paragraph>
                <Paragraph tagName="span" size="xs" color="dark" class="item__name">
                    {{ item.name }}
                </Paragraph>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
@import './style.scss';
</style>