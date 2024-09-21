<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Button } from '@/shared/ui/button';
import { Dots } from '@/shared/ui/dots'

</script>

<template>
  <section class="section-promotion">
    <Container>
      <Heading tagName="h2" regular size="xl">
        стоимость услуг
      </Heading>
      <div class="promotion__content">
        <div class="content__items">
          <div class="item">
            <div class="text">
              <div class="title__items">
                <Paragraph tagName="p" color="dark" size="xxl" class="title">
                  Компьютерная 3D томография с записью на диск
                  <Dots />
                </Paragraph>
              </div>
              <div class="price">
                <Paragraph tagName="span" color="dark-gray" size="xxl">10 000 ₽</Paragraph>
                <Paragraph tagName="span" color="red" size="xxl">5 000 ₽</Paragraph>
              </div>
            </div>
            <Button tagName="button" size="xs" color="white" type="none">
              Оставить заявку
            </Button>
          </div>
          <div class="item">
            <div class="text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                Компьютерная 3D томография с записью на диск
              </Paragraph>
              <div class="price">
                <Paragraph tagName="span" color="dark-gray" size="xxl">10 000 ₽</Paragraph>
                <Paragraph tagName="span" color="red" size="xxl">5 000 ₽</Paragraph>
              </div>
            </div>
            <Button tagName="button" size="xs" color="white" type="none">
              Оставить заявку
            </Button>
          </div>
          <div class="item">
            <div class="text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                Консультация у врачей любой специализации
              </Paragraph>
              <div class="price">
                <Paragraph tagName="span" color="dark-gray" size="xxl"></Paragraph>
                <Paragraph tagName="span" color="red" size="xxl">Бесплатно</Paragraph>
              </div>
            </div>
            <Button tagName="button" size="xs" color="white" type="none">
              Оставить заявку
            </Button>
          </div>
          <div class="item">
            <div class="text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                Протез полный съемный мягкий «Acry Free» (Израиль)
              </Paragraph>
              <div class="price">
                <Paragraph tagName="span" color="dark-gray" size="xxl">10 000 ₽</Paragraph>
                <Paragraph tagName="span" color="red" size="xxl">5 000 ₽</Paragraph>
              </div>
            </div>
            <Button tagName="button" size="xs" color="white" type="none">
              Оставить заявку
            </Button>
          </div>
          <div class="item">
            <Paragraph tagName="span" color="dark" size="xxl" class="discount">скидка -30%</Paragraph>
            <div class="text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                Функциональный анализ на кондилографе у гнатолога
              </Paragraph>
              <div class="price">
                <Paragraph tagName="span" color="dark-gray" size="xxl">10 000 ₽</Paragraph>
                <Paragraph tagName="span" color="red" size="xxl">5 000 ₽</Paragraph>
              </div>
            </div>
            <Button tagName="button" size="xs" color="white" type="none">
              Оставить заявку
            </Button>
          </div>
          <div class="item">
            <div class="text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                Коронка металлокерамическая
              </Paragraph>
              <div class="price">
                <Paragraph tagName="span" color="dark-gray" size="xxl">10 000 ₽</Paragraph>
                <Paragraph tagName="span" color="red" size="xxl">5 000 ₽</Paragraph>
              </div>
            </div>
            <Button tagName="button" size="xs" color="white" type="none">
              Оставить заявку
            </Button>
          </div>

        </div>
      </div>
    </Container>
  </section>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>