<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icons';
</script>
<template>
    <section class="section-solution">
        <Container tagName="div" size="m">
            <Heading tagName="h2" regular size="xl">вне зависимости от состояния здоровья ваша проблема с зубами будет
                решена!
            </Heading>
            <ul>
                <li class="li-active">Полное отсутствие зубов</li>
                <li>зубы подвижны или выпадают</li>
                <li>наличие воспаления</li>
                <li>атрофия костной ткани</li>
                <li>зубы подлежат удалению</li>
                <li>острый пародонтит</li>
            </ul>
            <div class="section-solution__content">
                <div class="content__item">
                    <div class="item__description">
                        <div class="text">
                            <Heading tagName="h4" regular size="m">протезирование, лечение и имплантация зубов</Heading>
                            <Paragraph tagName="p" color="dark-gray" size="s">
                                <Paragraph tagName="span" color="dark" size="s">врач:</Paragraph>
                                Фроленков Александр Сергеевич
                            </Paragraph>
                            <Paragraph tagName="p" color="dark-gray" size="s">
                                <Paragraph tagName="span" color="dark" size="s">Вводная часть:</Paragraph>
                                к специалистам нашей клиники обратилась 39-летняя пациентка Ю. с просьбой в
                                кратчайшие сроки сделать идеально белую голливудскую улыбку.
                            </Paragraph>
                            <Paragraph tagName="p" color="dark-gray" size="s">
                                <Paragraph tagName="span" color="dark" size="s">Что сделали:</Paragraph>
                                установка зубных имплантатов Astra Tech в местах, где отсутствовали зубы;
                                эндодонтическое лечение (подготовка под протезирование); отбеливание зубов системой Zoom 4;
                            </Paragraph>
                            <div class="item__price">
                                <Paragraph tagName="p" color="dark" size="xs">стоимость:</Paragraph>
                                <Paragraph tagName="p" color="dark" size="xxxl" class="summary">250 000 руб</Paragraph>
                            </div>
                        </div>
                        <div class="photos">
                            <div class="photos__content">
                                <img src="@/assets/images/mask_group.png" alt="">
                            </div>
                            <div class="buttons">
                                <Button tagName="button" size="s" color="white" type="circle">
                                    <Icon type="arrowLeft" color="none"></Icon>
                                </Button>
                                <Button tagName="button" size="s" color="white" type="circle">
                                    <Icon type="arrowRight" color="none"></Icon>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>
<style lang="scss">
.section-solution {
    h2 {
        margin: 200px 0 70px;
    }

    ul {
        gap: 10px;
        display: flex;

        li {
            border-bottom: 2px solid rgba(119, 126, 144, 0.05);
            padding: 3px 18px 3px 0px;
            color: #747B8F;

            &:hover {
                border-bottom: 2px solid rgb(35, 38, 47);
                cursor: pointer;
                color: #23262F;
            }
        }
    }

    .li-active {
        border-bottom: 2px solid rgb(35, 38, 47);
        color: #23262F;
    }

    .section-solution__content {
        .content__item {
            margin-top: 60px;
            padding: 25px 0;
        }

        .item__description {
            display: grid;
            grid-template-columns: 1fr 1fr;

            .text {
                h4 {
                    margin-bottom: 40px;
                }

                p {
                    margin-top: 20px;
                }

                .item__price {
                    margin-top: 73px;

                    p {
                        margin: 0;
                    }

                    .summary {
                        font-size: 30px;
                        line-height: 33px;
                        font-weight: 700;
                    }
                }
            }

            .photos {
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: end;

                .photos__content {
                    border-radius: 100%;
                    overflow: hidden;

                }

                .buttons {
                    display: flex;
                    gap: 10px;
                    margin-top: 20px;

                    .button {
                        height: 50px;
                    }
                }
            }
        }

    }
}
</style>>