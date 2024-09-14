<script setup lang="ts">
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Heading } from '@/shared/ui/text/heading';
import { useDoctorById } from '@/entities/doctors/model/doctor.model';

const props = defineProps<{
    doctorId: number;
}>();

const { doctor } = useDoctorById(props.doctorId);
</script>

<template>
    <Paragraph tagName="p" size="xs" color="dark-gray">
        {{ doctor.specialties }}
    </Paragraph>
    <Heading tagName="h2" regular size="s" color="dark">
        {{ doctor.fullName }}
    </Heading>
    <div class="expierence">
        <Paragraph tagName="span" size="xs" color="dark-gray">
            {{ doctor.experienceText }}
        </Paragraph>
        <span class="dot"></span>
        <Paragraph tagName="span" size="xs" color="dark-gray">
            {{ doctor.category }}
        </Paragraph>
    </div>
</template>