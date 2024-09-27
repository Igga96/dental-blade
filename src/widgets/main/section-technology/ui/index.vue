<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
import { Button } from '@/shared/ui/button';
import { Slider } from '@/shared/ui/slider';
import { useSwipe } from '@/shared/composables/useSwipe'
import { ref } from 'vue';

interface CardsItem {
    id: number;
    title: string;
    text: string;
}
interface Props {
    sectionTechnologyData: {
        title: string;
        cards: CardsItem[];
    };
}
const { sectionTechnologyData } = defineProps<Props>();

const itemsContainer = ref<HTMLElement | null>(null);
useSwipe({ elementRef: itemsContainer });

</script>

<template>
    <section class="section-technology">
        <Container>
            <div class="section__tittle-with-buttons">
                <Heading tagName="h2" regular size="xl">{{ sectionTechnologyData.title }}</Heading>
                <div class="btn__not-slide">
                    <Button tagName="button" size="s" color="accent" type="none">Записаться на прием</Button>
                    <Circle tagName="button" color="accent" size="s">
                        <icon type="arrow" color="white"></icon>
                    </Circle>
                </div>
            </div>
        </Container>
        <Slider>
            <ul class="section-technology__items" ref="itemsContainer">
                <li class="item" v-for="item in sectionTechnologyData.cards" :key="item.id">
                    <div class="item__circle">
                        <Circle tagName="button" size="m" color="light-blue-second">
                            <Paragraph tagName="span" color="accent" size="s">
                                0{{ item.id + 1 }}
                            </Paragraph>
                        </Circle>
                    </div>
                    <Heading tagName="h4" color="dark" size="xs" regular class="item__title">
                        {{ item.title }}
                    </Heading>
                    <Paragraph tagName="p" color="dark-gray" size="xs" class="item__text">
                        {{ item.text }}
                    </Paragraph>
                </li>
            </ul>
        </Slider>
        <div class="hidden-button">
            <Button tagName="button" size="s" color="accent" type="none">Записаться на прием</Button>
            <Circle tagName="button" color="accent" size="s">
                <icon type="arrow" color="white"></icon>
            </Circle>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@import './style.scss';
</style>