<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';

</script>

<template>

<section class="section-all-on-first">
    <Container>
      <Heading tagName="h2" regular size="xl">
        Имплантация без боли: All-on-4® при любой степени потери зубов
      </Heading>
    </Container>
    <div class="section-all-on-first__content">
      <div class="content__items">
        <div class="item">
          <div class="title">
            <Paragraph tagName="p" color="dark" size="xxl">
              нет всех<br> зубов
            </Paragraph>
            <Circle tagName="span" color="accent" size="s">
              <Icon type="implant" color="none"></Icon>
            </Circle>
          </div>
          <Paragraph tagName="p" color="dark-gray" size="xs">
            Замена съемного протеза на конструкцию без нёба с фиксацией на имплантатах улучшает качество жизни на два
            порядка: ощущается как свои собственные зубы, возвращает полные вкусовые ощущения, не нарушает дикцию.
          </Paragraph>
        </div>
        <div class="item">
          <div class="title">
            <Paragraph tagName="p" color="dark" size="xxl">
              дефицит <br>костной ткани
            </Paragraph>
            <Circle tagName="span" color="accent" size="s">
              <Icon type="caries1" color="none"></Icon>
            </Circle>
          </div>
          <Paragraph tagName="p" color="dark-gray" size="xs">
            Атрофия кости требует проведения надежных, результативных и долговечных, но затратных и отдаляющих
            протезирование.
          </Paragraph>
        </div>
        <div class="item">
          <div class="title">
            <Paragraph tagName="p" color="dark" size="xxl">
              почти не <br>
              осталось зубов
            </Paragraph>
            <Circle tagName="span" color="accent" size="s">
              <Icon type="caries2" color="none"></Icon>
            </Circle>
          </div>
          <Paragraph tagName="p" color="dark-gray" size="xs">
            All-on-4® при частичном отсутствии зубов проводится с одновременным удалением всех несостоятельных безнадежных
            зубов.
          </Paragraph>
        </div>
        <div class="item">
          <div class="title">
            <Paragraph tagName="p" color="dark" size="xxl">
              нет всех<br> зубов
            </Paragraph>
            <Circle tagName="span" color="accent" size="s">
              <Icon type="implant" color="none"></Icon>
            </Circle>
          </div>
          <Paragraph tagName="p" color="dark-gray" size="xs">
            Замена съемного протеза на конструкцию без нёба с фиксацией на имплантатах улучшает качество жизни на два
            порядка: ощущается как свои собственные зубы, возвращает полные вкусовые ощущения, не нарушает дикцию.
          </Paragraph>
        </div>
        <div class="item">
          <div class="title">
            <Paragraph tagName="p" color="dark" size="xxl">
              дефицит <br>костной ткани
            </Paragraph>
            <Circle tagName="span" color="accent" size="s">
              <Icon type="heart" color="white"></Icon>
            </Circle>
          </div>
          <Paragraph tagName="p" color="dark-gray" size="xs">
            Атрофия кости требует проведения надежных, результативных и долговечных, но затратных и отдаляющих
            протезирование.
          </Paragraph>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>