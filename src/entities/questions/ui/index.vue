<script setup lang="ts">
import { useQuestionsModel } from '@/entities/questions/model/questions.model';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';

const { questions, activeQuestionIndex, toggleQuestion } = useQuestionsModel();
</script>

<template>
    <ul class="questions__list">
        <li class="item" v-for="(questionItem, index) in questions" :key="questionItem.id"
            :class="{ item_active: activeQuestionIndex === index }" @click="toggleQuestion(index)">
            <div class="item__question">
                <Paragraph tagName="p" size="m" color="dark">
                    <Paragraph tagName="span" size="m" color="dark-gray">0{{ index + 1 }}</Paragraph>
                    {{ questionItem.question }}
                </Paragraph>
                <Icon :rotate="activeQuestionIndex === index ? 180 : 0" type="arrowDown" color="dark" class="rotate-icon"></Icon>
            </div>
            <Paragraph tagName="p" size="xs" color="dark-gray" class="item__answer">
                {{ questionItem.answer }}
            </Paragraph>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
