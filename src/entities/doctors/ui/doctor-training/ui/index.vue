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