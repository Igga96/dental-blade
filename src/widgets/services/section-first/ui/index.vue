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
    <Header />
    <Container>
      <div class="section-first__content">
        <div class="content__left">
          <Heading tagName="h2" regular size="xl">
            верните зубы за
            <Paragraph tagName="span" size="parent" color="gray">
              один
            </Paragraph>
            день,
            <Paragraph tagName="span" size="parent" color="gray">
              без
            </Paragraph>
            боли
          </Heading>
          <Paragraph tagName="p" color="dark-gray" size="xl">
            Живите и жуйте полноценно сразу. Всего 2-3 дня - вы даже не вспомните, что у вас не свои зубы
          </Paragraph>
          <div class="buttons">
            <Button tagName="button" size="s" color="accent" type="none">
              Узнать подробнее
            </Button>
            <Button tagName="button" color="accent" size="s" type="circle">
              <icon type="play" color="white"></icon>
            </Button>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              смотреть видео отзыв
            </Paragraph>
          </div>
        </div>
        <div class="content__right">
          <div class="utp">
            <Circle tagName="span" color="accent" size="s">
              <icon type="whiteProtection" color="white"></icon>
            </Circle>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              пожизненная гарантия
            </Paragraph>
          </div>
          <div class="photo">
            <img src="@/assets/images/mask_group.png" alt="">
          </div>
          <div class="badge-right">
            <Circle tagName="span" color="opacity-light" size="s">
              <icon type="coloredTooth" color="accent" :size="43"></icon>
            </Circle>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>