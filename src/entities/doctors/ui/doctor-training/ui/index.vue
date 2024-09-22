<script setup lang="ts">
import { defineProps } from 'vue';
import { Paragraph } from '@/shared/ui/text/paragraph';

const props = defineProps<{
    doctor: {
        advancedTraining: Array<{ id: number; year: string; name: string }>;
    };
}>();
</script>

<template>
    <article class="doctor-training">
        <Paragraph tagName="p" size="xxl" color="dark" class="title">
            повышение квалификации
        </Paragraph>
        <ul class="training-list">
            <li v-for="item in doctor.advancedTraining" :key="item.id" class="item">
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
