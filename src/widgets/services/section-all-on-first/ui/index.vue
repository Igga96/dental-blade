<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
import { useSwipe } from '@/shared/composables/useSwipe';
import { ref } from 'vue';

const itemsContainer = ref<HTMLElement | null>(null);
useSwipe({ elementRef: itemsContainer });

interface CardItem {
  id: number;
  iconType: string;
  title: string;
  text: string;
}
interface Props {
  sectionAllOnFirstdData: {
    title: string;
    cards: CardItem[];
  };
}
const { sectionAllOnFirstdData } = defineProps<Props>();
</script>
<template>
  <section class="section-all-on-first">
    <Container>
      <Heading tagName="h2" regular size="xl">
        имплантация без боли:<br> all-on-4® при любой степени потери зубов
      </Heading>
    </Container>
    <div class="section-all-on-first__content">
      <div class="content__items" ref="itemsContainer">
        <div class="item" v-for="item in sectionAllOnFirstdData.cards">
          <div class="title">
            <Paragraph tagName="p" color="dark" size="xxl">
              {{ item.title }}
            </Paragraph>
            <Circle tagName="span" color="accent" size="s">
              <Icon :type="item.iconType" color="none"></Icon>
            </Circle>
          </div>
          <Paragraph tagName="p" color="dark-gray" size="xs">
            {{ item.text }}
          </Paragraph>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>