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
  sectionStandartsData: {
    title: string;
    cards: CardsItem[];
    imageBackground: string
  };
}
const { sectionStandartsData } = defineProps<Props>();
</script>

<template>
<section class="section-standarts">
    <Container>
      <Heading tagName="h2" regular size="xl">
        {{sectionStandartsData.title}}
      </Heading>
      <div class="section-standarts__content">
        <div class="content__items">
          <div class="item" 
          v-for="item in sectionStandartsData.cards" 
          :key="item.id">
            <Circle tagName="span" color="white" size="m">
              <Icon :type="item.iconType" color="accent"></Icon>
            </Circle>
            <Paragraph tagName="p" color="dark" size="xxl" class="title">
              {{item.title}}
            </Paragraph>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              {{item.text}}
            </Paragraph>
          </div>
        </div>
        <div 
        class="content__photo" 
        :style="{ backgroundImage: `url(${sectionStandartsData.imageBackground})` }">
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