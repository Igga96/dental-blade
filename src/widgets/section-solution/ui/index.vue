<script setup lang="ts">
import { Container } from '@/shared/ui/container';
import { Heading } from '@/shared/ui/text/heading';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Button } from '@/shared/ui/button';
import { Circle } from '@/shared/ui/circle';
import { Icon } from '@/shared/ui/icons';
import { useSwipe } from '@/shared/composables/useSwipe';
import { useSolutionSelector } from '@/widgets/section-solution/model/solutions.model';
import { ref } from 'vue'

const itemsContainer = ref<HTMLElement | null>(null);
useSwipe({ elementRef: itemsContainer });

interface SolutionItem {
    id: number;
    name: string;
    title: string;
    doctorFullName: string;
    introduction: string;
    treatment: string;
    totalCost: number;
    imageBackground: string;
}

interface Props {
    sectionSolutionData: {
        title: string;
        solutions: SolutionItem[];
    };
}

const { sectionSolutionData } = defineProps<Props>();

const {
    selectedSolution,
    selectSolution,
    selectPreviousSolution,
    selectNextSolution,
    isPreviousDisabled,
    isNextDisabled,
} = useSolutionSelector(sectionSolutionData.solutions);
</script>
<template>
    <section class="section-solution">
        <Container tagName="div" size="m">
            <Heading tagName="h2" regular size="xl" class="section-solution__title">
                вне зависимости от состояния здоровья ваша проблема c зубами будет
                <Paragraph tagName="span" size="parent" color="gray">
                    решена!
                </Paragraph>
            </Heading>
            <ul ref="itemsContainer" class="section-solution__list">
                <li v-for="item in sectionSolutionData.solutions" :key="item.id" class="item"
                    :class="{ item_active: selectedSolution?.id === item.id }" @click="selectSolution(item)">
                    <Paragraph tagName="p" color="dark-gray" size="xs">
                        {{ item.name }}
                    </Paragraph>
                </li>
            </ul>
            <div class="section-solution__content" v-if="selectedSolution">
                <div class="content__items">
                    <div class="item__description">
                        <Heading tagName="h4" regular size="m">{{ selectedSolution.title }}</Heading>
                        <Paragraph tagName="p" color="dark-gray" size="s">
                            <Paragraph tagName="span" color="dark" size="s">врач:</Paragraph>
                            {{ selectedSolution.doctorFullName }}
                        </Paragraph>
                        <Paragraph tagName="p" color="dark-gray" size="s">
                            <Paragraph tagName="span" color="dark" size="s">вводная часть:</Paragraph>
                            {{ selectedSolution.introduction }}
                        </Paragraph>
                        <Paragraph tagName="p" color="dark-gray" size="s">
                            <Paragraph tagName="span" color="dark" size="s">что сделали:</Paragraph>
                            {{ selectedSolution.treatment }}
                        </Paragraph>
                        <div class="item__price">
                            <Paragraph tagName="p" color="dark" size="xs">стоимость:</Paragraph>
                            <Paragraph tagName="p" color="dark" size="xxxl" class="summary">{{
                                selectedSolution.totalCost }} руб</Paragraph>
                        </div>
                    </div>
                    <div class="item__photo">
                        <div class="photos__content"
                            :style="{ backgroundImage: `url(${selectedSolution.imageBackground})` }">
                            <Circle tagName="span" color="accent" size="l">
                                <Icon type="heart" color="white" />
                            </Circle>
                        </div>
                        <div class="buttons">
                            <Button tagName="button" size="s" color="white" type="circle"
                                :class="{ button_disabled: isPreviousDisabled }" @click="selectPreviousSolution">
                                <Icon type="arrowLeft" color="none"></Icon>
                            </Button>
                            <Button tagName="button" size="s" color="white" type="circle"
                                :class="{ button_disabled: isNextDisabled }" @click="selectNextSolution">
                                <Icon type="arrowRight" color="none"></Icon>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>

<style lang="scss">
@import './style.scss';
</style>>