<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
</script>

<template>
<section class="section-standarts">
    <Container>
      <Heading tagName="h2" regular size="xl">
        Стандарт нашей работы никакой боли во время и после операции
      </Heading>
      <div class="section-standarts__content">
        <div class="content__items">
          <div class="item">
            <Circle tagName="span" color="white" size="m">
              <Icon type="coloredProtection" color="accent"></Icon>
            </Circle>
            <Paragraph tagName="p" color="dark" size="xxl" class="title">
              безболезненные уколы
            </Paragraph>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              инновационные капсульные шприцы обладают тонкими и острыми иглами, что минимизирует дискомфорт при введении
              уколов.
            </Paragraph>
          </div>
          <div class="item">
            <Circle tagName="span" color="white" size="m">
              <Icon type="coloredProtection" color="accent"></Icon>
            </Circle>
            <Paragraph tagName="p" color="dark" size="xxl" class="title">
              быстрое восстановление
            </Paragraph>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              мягкая седация позволяет пациентам чувствовать себя расслабленно и спокойно, уменьшая тревожность и стресс.
            </Paragraph>
          </div>
          <div class="item">
            <Circle tagName="span" color="white" size="m">
              <Icon type="coloredProtection" color="accent"></Icon>
            </Circle>
            <Paragraph tagName="p" color="dark" size="xxl" class="title">
              легкие обезболивающие
            </Paragraph>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              современные обезболивающие препараты не вызывают побочных эффектов, таких как сонливость или расстройства
              желудка.
            </Paragraph>
          </div>
          <div class="item">
            <Circle tagName="span" color="white" size="m">
              <Icon type="coloredProtection" color="accent"></Icon>
            </Circle>
            <Paragraph tagName="p" color="dark" size="xxl" class="title">
              думаем о вашем комфорте
            </Paragraph>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              использование передовых технологий позволяет нам проводить диагностику и лечение на самом высоком уровне.
            </Paragraph>
          </div>
        </div>
        <div class="content__photo">
          <Circle tagName="span" color="accent" size="l">
            <Icon type="heart" color="white"></Icon>
          </Circle>
        </div>
      </div>
    </Container>
  </section>

</template>
<style scoped lang="scss">
@import './style.scss';
</style>