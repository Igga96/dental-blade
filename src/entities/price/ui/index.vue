<script setup lang="ts">
import { computed } from 'vue';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Heading } from '@/shared/ui/text/heading';
import { Prices } from '@/entities/price/model/price.types'

const props = defineProps<{
    pricesData?: Prices[];
}>();

const sortedPricesData = computed(() => {
    if (!props.pricesData) {
        return [];
    }

    return props.pricesData.reduce((acc, price) => {
        if (!acc[price.category]) {
            acc[price.category] = [];
        }
        acc[price.category].push(price);
        return acc;
    }, {} as Record<string, Prices[]>);
});
</script>
<template>
    <div v-if="Object.keys(sortedPricesData).length === 0">
        <Paragraph tagName="p" color="dark-gray" size="xxl">
            Данные отсутствуют
        </Paragraph>
    </div>
    <div v-else>
        <div v-for="(prices, category) in sortedPricesData" :key="category" class="item">
            <Heading tagName="h4" regular size="xs" class="item__title">
                {{ category }}
            </Heading>
            <div v-for="price in prices" :key="price.id" class="item__description">
                <Paragraph tagName="p" color="dark-gray" size="m">
                    {{ price.name }}
                </Paragraph>
                <Paragraph tagName="span" color="dark-gray" size="xl">
                    {{ price.price }} ₽
                </Paragraph>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import './style.scss';
</style>
