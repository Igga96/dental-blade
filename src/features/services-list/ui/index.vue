<script setup lang="ts">
import { Circle } from '@/shared/ui/circle';
import { Icon } from '@/shared/ui/icons';
import { Paragraph } from '@/shared/ui/text/paragraph';

interface Props {
    servicesListItems: {
        id: number;
        name: string;
        slug: string;
    }[]
}
const { servicesListItems } = defineProps<Props>();
</script>
<template>
    <RouterLink :to="`/services/${item.slug}`" class="item" v-for="item in servicesListItems">
        <Circle tagName="span" color="white">
            <Icon type="servicesTooth" />
        </Circle>
        <Paragraph tagName="span" color="dark">{{ item.name }}</Paragraph>
    </RouterLink>
</template>
<style lang="scss" scoped>
.item {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 178px;
    padding: 20px;
    width: 100%;
    background: #F6F6F6;
    border-radius: 25px;
    transition: transform 0.3s ease, background 0.3s ease;

    &:hover {
        transform: translateY(-20px);
        background: #4963FF;
        z-index: 1111;

        .text {
            color: #FFF;
        }
    }

    .circle {
        width: 60px;
        height: 60px;
        margin-bottom: 20px;
    }

    .text {
        font-size: 16px;
        line-height: 24px;
        max-width: 150px;
        text-align: center;
    }
}

</style>
