<script setup lang="ts">
import { useQuestionsModel } from '@/entities/questions/model/questions.model';
import { Container } from '@/shared/ui/container';
import { Heading } from '@/shared/ui/text/heading';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';

const { questions, activeQuestionIndex, toggleQuestion } = useQuestionsModel();
</script>

<template>
    <ul>
        <li v-for="(questionItem, index) in questions" :key="questionItem.id"
            :class="{ active: activeQuestionIndex === index }" @click="toggleQuestion(index)">
            <div class="question">
                <Paragraph tagName="p" size="m" color="dark">
                    <Paragraph tagName="span" size="m" color="dark-gray">{{ index + 1 }}</Paragraph>
                    {{ questionItem.question }}
                </Paragraph>
                <Icon type="arrowDown" color="dark" class="rotate-icon"></Icon>
            </div>
            <Paragraph tagName="p" size="xs" color="dark-gray" class="question__description">
                {{ questionItem.answer }}
            </Paragraph>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>