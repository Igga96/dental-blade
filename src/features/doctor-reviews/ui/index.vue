<script setup lang="ts">
import { Button } from '@/shared/ui/button';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons'

const progressFill = [
    {
        doctorId: 0,
        rating: 4.8,
        reviewCount: 256,
        labelItems: [
            { id: 0, name: 'обследование', text: '', percent: 89 },
            { id: 1, name: 'эффективность лечения', text: '', percent: 100 },
            { id: 2, name: 'отношение к пациенту', text: '', percent: 40 },
            { id: 3, name: 'информирование', text: '', percent: 55 },
            { id: 4, name: 'посоветуете ли врача', text: '', percent: 100 },
        ],
    },
];

const getLabelInfo = (percent: number, name: string) => {
    if (name === 'посоветуете ли врача') {
        if (percent <= 40) return { color: '#ED2626', text: 'нет' };
        if (percent > 40 && percent <= 60) return { color: '#4963FF', text: 'возможно' };
        if (percent > 60 && percent <= 90) return { color: '#FA8F54', text: 'да' };
        if (percent > 90 && percent <= 100) return { color: '#58C27D', text: 'обязательно' };
    }

    if (percent <= 40) return { color: '#ED2626', text: 'плохо' };
    if (percent > 40 && percent <= 60) return { color: '#4963FF', text: 'средне' };
    if (percent > 60 && percent <= 90) return { color: '#FA8F54', text: 'хорошо' };
    if (percent > 90 && percent <= 100) return { color: '#58C27D', text: 'отлично' };
    return { color: '', text: '' };
};
</script>

<template>
    <div class="doctor__rating">
        <div class="rating__title">
            <Paragraph tagName="span" color="dark-gray" class="title">
                рейтинг врача
            </Paragraph>
            <div class="title__items">
                <Paragraph tagName="span" color="dark">
                    {{ progressFill[0].rating }}
                </Paragraph>
                <Icon type="star" />
                <Paragraph tagName="span" color="dark-gray">
                    ({{ progressFill[0].reviewCount }} отзывов)
                </Paragraph>
            </div>
        </div>
        <div class="rating__label" v-for="item in progressFill[0].labelItems" :key="item.id">
            <div class="label__text">
                <Paragraph tagName="span" color="dark" class="text__title">{{ item.name }}</Paragraph>
                <Paragraph tagName="span" color="dark" class="text__level" :style="{
                    color:
                        getLabelInfo(item.percent, item.name).color
                }">
                    {{ getLabelInfo(item.percent, item.name).text }}
                </Paragraph>
            </div>
            <div class="progress-bar">
                <div class="progress-fill"
                    :style="{ width: item.percent + '%', backgroundColor: getLabelInfo(item.percent, item.name).color }">
                </div>
            </div>
        </div>
        <hr />
        <Button tagName="button" size="xs" type="none" color="accent">
            <Paragraph tagName="span" color="white">
            оставить отзыв
            </Paragraph>
        </Button>
    </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>
