<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icons';
import { DoctorsSlider } from '@/features/slider/ui/doctors-slider'

</script>
<template>
    <section class="doctors-slider">
        <Container>
            <div class="section__tittle-with-buttons">
                <Heading tagName="h2" regular size="xl">наши врачи</Heading>
                <div class="btn__slide">
                    <Button tagName="button" size="s" color="white" type="circle">
                        <Icon type="arrowLeft" color="none"></Icon>
                    </Button>
                    <Button tagName="button" size="s" color="white" type="circle">
                        <Icon type="arrowRight" color="none"></Icon>
                    </Button>
                </div>
            </div>
        </Container>
        <DoctorsSlider/>
    </section>
</template>
<style lang="scss">
@import './style.scss';
</style>