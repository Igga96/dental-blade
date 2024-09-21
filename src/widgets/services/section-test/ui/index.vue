<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
import { Button } from '@/shared/ui/button';

</script>

<template>
<section class="section-test">
    <Container>
      <Heading tagName="h2" regular size="xl">
        узнайте подходит ли вам All-on-4 и рассчитайте, сколько будет стоить востановить зубы за 1 день
      </Heading>
      <Paragraph tagName="p" color="dark-gray" size="l">
        All-on-4® - методика имплантации зубов с использованием всего 4 имплантатов для восстановления полной или
        частичной зубной дуги. Это инновационное решение позволяет быстро и эффективно восстановить утраченные зубы, даже
        при значительной потере костной ткани.
      </Paragraph>
      <div class="section-test__content">
        <div class="content__test">
          <div class="title">
            <Paragraph tagName="p" color="dark-gray" size="l">
              пройдите тест
            </Paragraph>
            <Paragraph tagName="p" color="dark-gray" size="l">
              вопрос 1/4
            </Paragraph>
          </div>
          <div class="progress-bar">
            <div class="progress-fill">
            </div>
          </div>
          <div class="test">
            <Paragraph tagName="p" color="dark" size="l" class="title">
              вам нужна имплантация?
            </Paragraph>
            <div class="test__items">
              <div class="item active">
                <div class="img">
                  <img src="@/assets/images/services_page/test/upper_jaw.png" alt="">
                  <Circle tagName="span" color="accent" size="s">
                    <Icon type="tick" color="none"></Icon>
                  </Circle>
                </div>
                <Paragraph tagName="p" color="dark" size="l">
                  верхней челюсти
                </Paragraph>
              </div>
              <div class="item">
                <div class="img">
                  <img src="@/assets/images/services_page/test/lower_jaw.png" alt="">
                  <Circle tagName="span" color="accent" size="s">
                    <Icon type="tick" color="none"></Icon>
                  </Circle>
                </div>
                <Paragraph tagName="p" color="dark" size="l">
                  нижней челюсти
                </Paragraph>
              </div>
              <div class="item">
                <div class="img">
                  <img src="@/assets/images/services_page/test/both_jaws.png" alt="">
                  <Circle tagName="span" color="accent" size="s">
                    <Icon type="tick" color="none"></Icon>
                  </Circle>
                </div>
                <Paragraph tagName="p" color="dark" size="l">
                  обеих челюстей
                </Paragraph>
              </div>
            </div>
          </div>
          <div class="buttons">
            <Paragraph tagName="p" color="dark-gray" size="xs">
              выберите вариант ответа и нажмите кнопку “Далее”
            </Paragraph>
            <Button tagName="button" size="xs" color="accent" type="none">
              далее
            </Button>
          </div>
        </div>
        <div class="content__photo">
          <div class="gradient">
            <Paragraph tagName="p" color="white" size="m">
              по результатам ваших ответов мы сможем более точно сориентировать вас по цене
            </Paragraph>
          </div>
        </div>
      </div>
    </Container>

  </section>

</template>
<style scoped lang="scss">
@import './style.scss';
</style>