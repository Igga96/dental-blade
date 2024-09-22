<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
interface CardsItem {
  id: number;
  iconType: string;
  title: string;
  text: string;
}
interface Props {
  sectionSafetyData: {
    title: string;
    cards: CardsItem[];
  };
}
const { sectionSafetyData } = defineProps<Props>();
</script>
<template>
  <section class="section-safety">
    <Container>
      <Heading tagName="h2" regular size="xl">
        {{ sectionSafetyData.title }}
        <div class="badge">
          <Icon type="snow" color="none" />
        </div>
      </Heading>
    </Container>
    <div class="section-safety__content">
      <div class="content__cards">
        <div class="item" v-for="item in sectionSafetyData.cards" :key="item.id">
          <Circle tagName="span" color="white" size="s">
            <Icon :type="item.iconType" color="none" />
          </Circle>
          <div class="item__text">
            <Paragraph tagName="p" color="dark" size="xxl" class="title">
              {{ item.title }}
            </Paragraph>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              {{ item.text }}
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>