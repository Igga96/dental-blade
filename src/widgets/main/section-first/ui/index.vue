<script setup lang="ts">
import { Header } from '@/widgets/header';
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
import { Button } from '@/shared/ui/button';
</script>
<template>
    <section class="section-first">
    <div class="section-first__content">
      <Header/>
      <Container tagName="div" size="m">
        <Heading tagName="h2" regular size="xxl">
          <Circle tagName="button" color="opacity-light" size="m">
            <Icon type="heart" color="white"></Icon>
          </Circle>
          улыбка<br> вашей мечты со скидкой 30%
        </Heading>

        <Paragraph tagName="p" color="white" medium large size="xl">
          Воспользуйтесь нашим предложением на отбеливание зубов и сияйте уверенностью каждый день!
        </Paragraph>
        <div class="section-first__button">
          <Button tagName="button" size="s" color="accent" type="none">
            Узнать подробнее
          </Button>
          <Circle tagName="button" color="accent" size="m">
            <icon type="arrow" color="white"></icon>
          </Circle>
        </div>
      </Container>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  @import './style.scss';
</style>