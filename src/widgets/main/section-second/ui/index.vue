<script setup lang="ts">
import { Container } from '@/shared/ui/container';
import { Heading } from '@/shared/ui/text/heading';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
import { RouterLink } from 'vue-router';
import { useTouchSwipe } from '@/shared/composables/useTouchSwipe';
import { ref } from 'vue';

interface CardsItem {
  id: number;
  background: string;
  title: string;
  text: string;
  slug: string;
}

interface Props {
  sectionSecondData: {
    title: string;
    cards: CardsItem[];
    iconType: string;
  };
}

const { sectionSecondData } = defineProps<Props>();

const itemsContainer = ref<HTMLElement | null>(null);
useTouchSwipe({ elementRef: itemsContainer });
</script>

<template>
  <section class="section-second">
    <Container tagName="div" size="m">
    <RouterLink to="/services">
      <Heading tagName="h2" regular size="xl">
        один визит в клинику приблизит вас к
        <Paragraph tagName="span" size="parent" color="gray">
          качественному решению
        </Paragraph>
        любой проблемы.
      </Heading>
    </RouterLink>
      <div class="section-second__items" ref="itemsContainer">
        <RouterLink :to="`/services/${item.slug}`"  v-for="(item, index) in sectionSecondData.cards" :key="item.id" class="item" :id="`item-${index + 1}`">
          <div class="item__background" :style="{ backgroundImage: `url(${item.background})` }">
            <div class="service__block">
              <Heading tagName="h3" regular size="l" color="dark" class="title">{{ item.title }}</Heading>
              <Paragraph tagName="p" color="dark-gray" size="xs">{{ item.text }}</Paragraph>
            </div>
            <div class="item_circle">
              <Circle tagName="span" color="accent" size="m">
                <icon :type="sectionSecondData.iconType" color="white" />
              </Circle>
            </div>
          </div>
        </RouterLink>
      </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
