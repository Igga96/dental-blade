<script setup lang="ts">
import { Paragraph } from '@/shared/ui/text/paragraph';
import { useDoctorById } from '@/entities/doctors/model/doctor.model';

const props = defineProps<{
    doctorId: number;
}>();

const { doctor } = useDoctorById(props.doctorId);
</script>

<template>
    <article class="doctor-training">
        <Paragraph tagName="p" size="xxl" color="dark" class="title">
            Повышение квалификации
        </Paragraph>
        <ul class="training-list">
            <li v-for="item in  doctor.advancedTraining" :key="item.id" class="item">
                <Paragraph tagName="p" size="xs" color="dark-gray" class="description">
                    <Paragraph tagName="span" size="xs" color="dark">
                        {{ item.year }}
                    </Paragraph>
                    {{ item.name }}
                </Paragraph>
            </li>
        </ul>
    </article>
</template>
<style lang="scss" scoped>
@import './style.scss';
</style>