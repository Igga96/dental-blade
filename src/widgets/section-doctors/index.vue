<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Button } from '@/shared/ui/button';
</script>
<template>
    <section class="section-doctors">
        <Container>
            <div class="section__tittle-with-buttons">
                <Heading tagName="h2" regular size="xl">Наши врачи</Heading>
                <div class="btn__slide">
                    <Button tagName="button" size="s" color="white" type="circle">prew</Button>
                    <Button tagName="button" size="s" color="white" type="circle">next</Button>
                </div>
            </div>
        </Container>
        <div class="doctors-slider">
            <div class="doctors-slider__content">
                <a class="item">
                    <div class="item__info">
                        <Paragraph tagName="p" color="white" size="xxxl">Фроленков Александр Сергеевич</Paragraph>
                        <Paragraph tagName="p" color="white" size="xs">cтоматолог-терапевт, эндодонтист, врач высшей
                            квалификационной категории</Paragraph>
                        <p class="expierence">
                            <Paragraph tagName="span" color="white" size="xs"> высшая категория</Paragraph>
                            <Paragraph tagName="span" color="white" size="xs">стаж 20 лет</Paragraph>
                        </p>
                    </div>
                </a>
                <a class="item">
                    <div class="item__info">
                        <Paragraph tagName="p" color="white" size="xxxl">Фроленков Александр Сергеевич</Paragraph>
                        <Paragraph tagName="p" color="white" size="xs">cтоматолог-терапевт, эндодонтист, врач высшей
                            квалификационной категории</Paragraph>
                        <p class="expierence">
                            <Paragraph tagName="span" color="white" size="xs"> высшая категория</Paragraph>
                            <Paragraph tagName="span" color="white" size="xs">стаж 20 лет</Paragraph>
                        </p>
                    </div>
                </a>
                <a class="item">
                    <div class="item__info">
                        <Paragraph tagName="p" color="white" size="xxxl">Фроленков Александр Сергеевич</Paragraph>
                        <Paragraph tagName="p" color="white" size="xs">cтоматолог-терапевт, эндодонтист, врач высшей
                            квалификационной категории</Paragraph>
                        <p class="expierence">
                            <Paragraph tagName="span" color="white" size="xs"> высшая категория</Paragraph>
                            <Paragraph tagName="span" color="white" size="xs">стаж 20 лет</Paragraph>
                        </p>
                    </div>
                </a>
                <a class="item">
                    <div class="item__info">
                        <Paragraph tagName="p" color="white" size="xxxl">Фроленков Александр Сергеевич</Paragraph>
                        <Paragraph tagName="p" color="white" size="xs">cтоматолог-терапевт, эндодонтист, врач высшей
                            квалификационной категории</Paragraph>
                        <p class="expierence">
                            <Paragraph tagName="span" color="white" size="xs"> высшая категория</Paragraph>
                            <Paragraph tagName="span" color="white" size="xs">стаж 20 лет</Paragraph>
                        </p>
                    </div>
                </a>
                <a class="item">
                    <div class="item__info">
                        <Paragraph tagName="p" color="white" size="xxxl">Фроленков Александр Сергеевич</Paragraph>
                        <Paragraph tagName="p" color="white" size="xs">cтоматолог-терапевт, эндодонтист, врач высшей
                            квалификационной категории</Paragraph>
                        <p class="expierence">
                            <Paragraph tagName="span" color="white" size="xs"> высшая категория</Paragraph>
                            <Paragraph tagName="span" color="white" size="xs">стаж 20 лет</Paragraph>
                        </p>
                    </div>
                </a>
                <a class="item">
                    <div class="item__info">
                        <Paragraph tagName="p" color="white" size="xxxl">Фроленков Александр Сергеевич</Paragraph>
                        <Paragraph tagName="p" color="white" size="xs">cтоматолог-терапевт, эндодонтист, врач высшей
                            квалификационной категории</Paragraph>
                        <p class="expierence">
                            <Paragraph tagName="span" color="white" size="xs"> высшая категория</Paragraph>
                            <Paragraph tagName="span" color="white" size="xs">стаж 20 лет</Paragraph>
                        </p>
                    </div>
                </a>

            </div>
        </div>
    </section>
</template>
<style lang="scss">
.section-doctors {
    h2 {
        margin: 200px 0 70px;
    }

    .doctors-slider {
        width: 100%;
        overflow: hidden;
        padding-left: 110px;
    }

    .doctors-slider__content {
        display: flex;
        gap: 10px;

        .item {
            background: url('@/assets/images/doctors/1.png');
            background-position: center;
            height: 541px;
            border-radius: 30px;
            cursor: pointer;
        }

        .item {
            .item__info {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: end;
                padding: 30px;
                width: 385px;
                border-radius: 30px;

                p {
                    margin-top: 15px;
                    font-weight: 600px;
                }

                p {
                    display: none;
                }

                &:hover {
                    background: linear-gradient(180.00deg, rgba(0, 0, 0, 0) 23.58%, rgb(28, 30, 39) 123.224%);


                    p {
                        display: block;
                    }

                    .expierence {
                        display: flex;
                        gap: 5px;
                    }
                }

                span {
                    font-size: 14px;
                    line-height: 24px;
                    margin-top: 20px;
                    padding: 11px 20px;
                    border-radius: 90px;
                    backdrop-filter: blur(14px);
                    background: rgba(255, 255, 255, 0.1);
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .section-doctors {
        h2 {
            margin: 100px 0 40px;
        }

        .section__tittle-with-buttons {
            .btn__slide {
                display: none;
            }
        }

        .doctors-slider {
            width: 100%;
            overflow: hidden;
            padding-left: 45px;
        }

        .doctors-slider__content {
            .item {
                height: 440px;
                width: 330px;
                border-radius: 20px;
            }

            .item {
                .item__info {
                    padding: 25px;
                    width: 330px;
                    border-radius: 30px;

                    p {
                        margin-top: 15px;
                        font-weight: 600px;
                    }

                    &:hover {
                        background: linear-gradient(180.00deg, rgba(0, 0, 0, 0),rgb(28, 30, 39) 100.854%);

                        .expierence {
                            flex-direction: column;
                            gap: 5px;
                            margin-bottom: 0;
                            margin-top: 23px;
                        }
                    }

                    span {
                        margin-top: 0;
                        padding: 6px 15px;
                        width: max-content;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 375px) {
    .section-doctors {
        .doctors-slider {
            width: 100%;
            overflow: hidden;
            padding-left: 20px;
        }
    }
}
</style>