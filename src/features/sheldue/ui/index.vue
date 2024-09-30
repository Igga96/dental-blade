<script setup lang="ts">
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Button } from '@/shared/ui/button';
import { useSwipe } from '@/shared/composables/useSwipe'
import { ref } from 'vue';

const itemsContainer = ref<HTMLElement | null>(null);
useSwipe({ elementRef: itemsContainer });

const activeDate = ref<number>(0);
const activeTime = ref<number | null>(null);


const setActiveDate = (index: number) => {
    if (index === 1) return;
    activeDate.value = index;
};

const setActiveTime = (index: number) => {
    activeTime.value = index;
};
</script>

<template>
    <div class="info__content-right">
        <div class="date-slider" ref="itemsContainer">
            <ul slidesPerView="auto" spaceBetween={10} class="date-slider__items">
                <li v-for="(date, dateIndex) in ['15 сент', '16 сент', '17 сент', '18 сент', '19 сент']" :key="dateIndex"
                    :class="[
                        'item',
                        { 'item_active-date': activeDate === dateIndex, 'item_busy-date': dateIndex === 1 }
                    ]" @click="setActiveDate(dateIndex)">
                    <Paragraph tagName="p" color="dark" size="m" class="date">
                        {{ date }}
                    </Paragraph>
                    <Paragraph tagName="p" color="dark" size="m" class="day">
                        {{ dateIndex === 0 ? 'сегодня' : (dateIndex === 1 ? 'завтра' : ['вт', 'ср', 'чт'][dateIndex - 2]) }}
                    </Paragraph>
                </li>
            </ul>
        </div>
        <div class="time-slider">
            <ul class="time-slider__items">
                <li v-for="(time, timeIndex) in ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00']" :key="timeIndex"
                    :class="['item', { 'item_active-time': activeTime === timeIndex }]" @click="setActiveTime(timeIndex)">
                    <Paragraph tagName="span" color="dark" size="m">
                        {{ time }}
                    </Paragraph>
                </li>
            </ul>
        </div>
        <Button tagName="button" color="white" size="xs" type="none">
            записаться на прием
        </Button>
    </div>
</template>
<style lang="scss">
@import './style.scss';
</style>