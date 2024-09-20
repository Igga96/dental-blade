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
<section class="section-all-on-second">
    <Container>
      <Heading tagName="h2" regular size="xl">
        имплантация All-on-4:<br>
        как это происходит и что включает в себя.
      </Heading>
      <div class="section-all-on-second__content">
        <div class="content__video">
          <iframe src="" frameborder="1">
          </iframe>
        </div>
        <div class="content__cards">
          <div class="item">
            <Circle tagName="span" color="white" size="s">
              <Paragraph tagName="span" color="accent" size="xxl">01</Paragraph>
            </Circle>
            <div class="item__text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                подготовительный этап
              </Paragraph>
              <Paragraph tagName="p" color="dark-gray" size="xs">
                на консультации врач обсуждает план лечения и осматривает полость рта. Проводится диагностика с
                компьютерной
                томографией челюстей и анализами. Создается виртуальная модель будущей улыбки пациента для оптимального
                результата
              </Paragraph>
            </div>
          </div>
          <div class="item">
            <Circle tagName="span" color="white" size="s">
              <Paragraph tagName="span" color="accent" size="xxl">02</Paragraph>
            </Circle>
            <div class="item__text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                xирургический этап
              </Paragraph>
              <Paragraph tagName="p" color="dark-gray" size="xs">
                при подготовке к имплантации зубов проводится санация полости рта. Затем устанавливается имплантат в
                челюсть с высокой точностью. Для естественного вида десны вокруг имплантата ставится формирователь десны.
              </Paragraph>
            </div>
          </div>
          <div class="item">
            <Circle tagName="span" color="white" size="s">
              <Paragraph tagName="span" color="accent" size="xxl">03</Paragraph>
            </Circle>
            <div class="item__text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                производственный этап
              </Paragraph>
              <Paragraph tagName="p" color="dark-gray" size="xs">
                для изготовления индивидуальных коронок стоматолог-ортопед снимает слепки зубов и отправляет их в
                зуботехническую лабораторию для производства временных и постоянных коронок, учитывая выбранный пациентом
                материал, цвет и форму.
              </Paragraph>
            </div>
          </div>
          <div class="item">
            <Circle tagName="span" color="white" size="s">
              <Paragraph tagName="span" color="accent" size="xxl">04</Paragraph>
            </Circle>
            <div class="item__text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                ортопедический этап
              </Paragraph>
              <Paragraph tagName="p" color="dark-gray" size="xs">
                временные коронки устанавливаются для сохранения эстетики и функциональности перед изготовлением
                постоянных. После примерки коронок на подгонку и цвет устанавливают постоянные коронки, завершая процедуру
                имплантации.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>

</template>
<style scoped lang="scss">
@import './style.scss';
</style>