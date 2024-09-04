<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
</script>
<template>
    <section class="section-questions">
        <Container tagName="div" size="m">
            <Heading tagName="h2" regular size="xl">у нас часто спрашивают?</Heading>
            <ol>
                <li>
                    <div class="question">
                        <Paragraph tagName="p" size="m" color="dark">
                            <Paragraph tagName="span" size="m" color="dark-gray">1</Paragraph>
                            Какие методы обезболивания используются в вашей клинике?
                        </Paragraph>
                        <Icon type="arrowDown" color="dark" class="rotate-icon"></Icon>
                    </div>
                    <Paragraph tagName="p" size="xs" color="dark-gray" class="question__description">///</Paragraph>
                </li>
                <li class="active">
                    <div class="question">
                        <Paragraph tagName="p" size="m" color="dark">
                            <Paragraph tagName="span" size="m" color="dark-gray">2</Paragraph>
                            Предоставляете ли вы услуги детской стоматологии?
                        </Paragraph>
                        <Icon type="arrowDown" color="dark" class="rotate-icon"></Icon>
                    </div>
                    <Paragraph tagName="p" size="xs" color="dark-gray" class="question__description">Да, в нашей клинике
                        есть
                        специалисты по детской стоматологии,
                        которые занимаются лечением и профилактикой
                        зубных заболеваний у детей. Мы создаем комфортные условия, чтобы маленькие пациенты не боялись
                        посещать
                        стоматолога.</Paragraph>
                </li>
                <li>
                    <div class="question">
                        <Paragraph tagName="p" size="m" color="dark">
                            <Paragraph tagName="span" size="m" color="dark-gray">3</Paragraph>
                            Как записаться на прием в вашу клинику?
                        </Paragraph>
                        <Icon type="arrowDown" color="dark" class="rotate-icon"></Icon>
                    </div>
                    <Paragraph tagName="p" size="xs" color="dark-gray" class="question__description">///</Paragraph>
                </li>
                <li>
                    <div class="question">
                        <Paragraph tagName="p" size="m" color="dark">
                            <Paragraph tagName="span" size="m" color="dark-gray">4</Paragraph>
                            Какие виды протезирования зубов вы
                            предлагаете?
                        </Paragraph>
                        <Icon type="arrowDown" color="dark" class="rotate-icon"></Icon>
                    </div>
                    <Paragraph tagName="p" size="xs" color="dark-gray" class="question__description">///</Paragraph>
                </li>
                <li>
                    <div class="question">
                        <Paragraph tagName="p" size="m" color="dark">
                            <Paragraph tagName="span" size="m" color="dark-gray">5</Paragraph>
                            Какие виды протезирования зубов вы
                            предлагаете?
                        </Paragraph>
                        <Icon type="arrowDown" color="dark" class="rotate-icon"></Icon>
                    </div>
                    <Paragraph tagName="p" size="xs" color="dark-gray" class="question__description">///</Paragraph>
                </li>

            </ol>
        </Container>
    </section>
</template>
<style lang="scss">
.section-questions {
    h2 {
        margin: 200px 0 70px
    }

    ol {

        li {
            border-bottom: 1px solid rgba(119, 126, 144, 0.05);

            .question {
                padding: 25px 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;

                p {
                    font-weight: 500;
                }

                span {
                    margin-right: 33px;
                }
            }

            .question__description {
                display: none;
                padding: 20px 0 20px 50px;
                max-width: 667px;
            }
        }

        .active {

            .question__description {
                display: block;
            }
        }
    }
}
</style>