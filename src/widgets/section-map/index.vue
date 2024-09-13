<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
import { Button } from '@/shared/ui/button';
</script>
<template>
    <section class="section-map">
        <Container>
            <div class="section-map__content">
                <Circle tagName="button" color="accent" size="l" class="map-circle-heart">
                    <Icon type="heart" color="white"></Icon>
                </Circle>
                <div class="blur">
                    <Heading tagName="h4" size="xs" regular>Москва,
                        Кутузовский пр-кт, 45</Heading>
                    <div class="blur__text">
                        <p>
                            <Paragraph tagName="span" size="xl" color="dark">телефон:</Paragraph>
                            <Paragraph tagName="span" size="xl" color="dark">+7 (495) 988-99-30</Paragraph>
                        </p>
                        <p>
                            <Paragraph tagName="span" size="xl" color="dark">время работы:</Paragraph>
                            <Paragraph tagName="span" size="xl" color="dark">10:00–22.00.</Paragraph>
                        </p>
                        <p>
                            <Paragraph tagName="span" size="xl" color="dark">email:</Paragraph>
                            <Paragraph tagName="span" size="xl" color="dark">insmileveneers@gmail.com</Paragraph>
                        </p>
                    </div>
                    <div class="blur__button">
                        <Button tagName="button" type="none" size="s" color="white"></Button>
                        <Circle tagName="button" color="white" size="m">
                            <Icon type="arrow" color="dark"></Icon>
                        </Circle>
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>
<style lang="scss">
.section-map {
    display: flex;
    background: url('@/assets/images/section-map-background.jpg');
    background-position: bottom;
    background-size: 100%;
    width: 100%;
    height: 568px;
    margin-top: 180px;
    display: flex;
    justify-content: end;

    .section-map__content {
        position: relative;
        margin-top: -120px;
        display: flex;
        flex-direction: column;
        align-items: end;


        .map-circle-heart {
            width: 76px;
            height: 76px;
            transform: rotate(-30deg);
            margin-right: 70px;
            position: absolute;
            z-index: 11111;
            top: -38px;
        }

        .blur {
            border: 1px solid rgba(119, 126, 144, 0.05);
            border-radius: 30px;
            backdrop-filter: blur(34px);
            background: rgba(255, 255, 255, 0.2);
            padding: 40px;
            display: flex;
            flex-direction: column;
            gap: 40px;

            .blur__text {
                p {
                    padding: 5px 0;
                }
            }

            .blur__button {
                .circle {
                    width: 60px;
                    height: 60px;
                    transform: none;
                }
            }

            .button::before {
                content: 'записаться на прием';
            }
        }
    }
}
</style>