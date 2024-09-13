<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Heading } from '@/shared/ui/text/heading';

interface Props {
    doctorId: number;
}
const props = defineProps<Props>();
const store = useStore();
const doctor = computed(() => store.getters['doctors/getDoctorById'](props.doctorId));
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