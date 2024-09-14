<script setup lang="ts">
import { useCaseData } from '@/entities/cases/ui/case-info/model/case.model';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Heading } from '@/shared/ui/text/heading';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';

const { caseData, formattedCost } = useCaseData();
</script>

<template>
  <article class="case-article">
    <Heading tagName="h2" color="dark" size="l" class="article__title">
      {{ caseData?.name }}
    </Heading>
    <Paragraph tagName="p" size="xs" color="dark-gray" class="article__description">
      {{ caseData?.description }}
    </Paragraph>
    <hr>
    <div class="article__coast">
      <Paragraph tagName="p" size="xs" color="dark">
        Стоимость:
      </Paragraph>
      <Paragraph tagName="p" size="xxxl" color="dark" class="quantity">
        {{ formattedCost }}
      </Paragraph>
    </div>
    <hr>
    <div class="article__services">
      <Paragraph tagName="p" size="xxl" color="dark" class="services__title">
        Услуги
      </Paragraph>
      <ul class="services__list"> 
        <li v-for="item in caseData?.priceId" :key="item.id" class="item">
          <Circle tagName="span" color="green" size="xs">
            <Icon type="tick" color="none" />
          </Circle>
          <Paragraph tagName="p" size="xs" color="dark-gray">
            {{ item.name }}
          </Paragraph>
        </li>
      </ul>
    </div>
    <hr>
  </article>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
