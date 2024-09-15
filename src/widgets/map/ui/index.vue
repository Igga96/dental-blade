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
                <div class="contacts">
                    <Heading class="contacts__address" tagName="h4" size="xs" regular>Москва,
                        Кутузовский пр-кт, 45</Heading>
                    <div class="blur__text">
                        <p class="contacts__phone">
                            <Paragraph tagName="span" size="xl" color="dark">телефон: </Paragraph>
                            <Paragraph tagName="span" size="xl" color="dark">+7 (495) 988-99-30</Paragraph>
                        </p>
                        <p class="contacts__time">
                            <Paragraph tagName="span" size="xl" color="dark">время работы: </Paragraph>
                            <Paragraph tagName="span" size="xl" color="dark">10:00–22.00.</Paragraph>
                        </p>
                        <p class="contacts__email">
                            <Paragraph tagName="span" size="xl" color="dark">email: </Paragraph>
                            <Paragraph tagName="span" size="xl" color="dark">insmileveneers@gmail.com</Paragraph>
                        </p>
                    </div>
                    <div class="blur__button">
                        <Button tagName="button" type="none" size="s" color="white"></Button>
                        <Circle tagName="span" color="white" size="m">
                            <Icon type="arrow" color="dark"></Icon>
                        </Circle>
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>
<style lang="scss">
@import './style.scss';
</style>