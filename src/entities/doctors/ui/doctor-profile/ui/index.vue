<script setup lang="ts">
import { defineProps } from 'vue';
import { Paragraph } from '@/shared/ui/text/paragraph';

const props = defineProps<{
    doctor: {
        treatmentProfile: Array<{ id: number; name: string; percent: number }>;
    };
}>();
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
