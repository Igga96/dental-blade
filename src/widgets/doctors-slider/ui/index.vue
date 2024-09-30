<script setup lang="ts">
import { Container } from '@/shared/ui/container';
import { Heading } from '@/shared/ui/text/heading';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icons';
import { ref } from 'vue';
import { DoctorsSlider } from '@/features/slider/ui/doctors-slider';


const doctorsSliderRef = ref(); 

const handleSlideLeft = () => {
  doctorsSliderRef.value?.slideLeft(); 
};

const handleSlideRight = () => {
  doctorsSliderRef.value?.slideRight(); 
};
</script>

<template>
  <section class="doctors-slider">
    <Container>
      <div class="section__tittle-with-buttons">
        <Heading tagName="h2" regular size="xl">наши врачи</Heading>
        <div class="btn__slide">
          <Button tagName="button" size="s" color="white" type="circle" @click="handleSlideLeft">
            <Icon type="arrowLeft" color="none" />
          </Button>
          <Button tagName="button" size="s" color="white" type="circle" @click="handleSlideRight">
            <Icon type="arrowRight" color="none" />
          </Button>
        </div>
      </div>
    </Container>
    <DoctorsSlider ref="doctorsSliderRef" />
  </section>
</template>

<style lang="scss">
@import './style.scss';
</style>
