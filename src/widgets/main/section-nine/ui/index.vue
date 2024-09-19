<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Circle } from '@/shared/ui/circle';
interface DescriptionItem {
    id: number;
    text: string;
}
interface Props {
  sectionNineData: {
        title: string;
        heading: string;
        description: DescriptionItem[];
        text: string;
        imageBackground: string;
    };
}
const { sectionNineData } = defineProps<Props>();

</script>
<template>
  <section class="section-nine">
    <Container tagName="div" size="m">
      <Heading tagName="h2" regular size="xl">
      {{sectionNineData.title}}
      </Heading>
      <div class="section-nine__content">
        <div class="content__text">
          <Heading tagName="h4" size="s" regular class="text__title">
          {{sectionNineData.heading}}
          </Heading>
          <ul class="text__cards">
            <li v-for="item in sectionNineData.description" :key="item.id" class="item">
              <Circle tagName="span" size="s" color="light-blue-second" class="item__circle">
                <Paragraph tagName="span" color="accent" size="s">
                {{ item.id+1 }}
                </Paragraph>
              </Circle>
              <Paragraph tagName="p" color="dark" size="s" class="item__text">
              {{item.text}}
              </Paragraph>
            </li>
          </ul>
          <Paragraph tagName="p" color="dark-gray" size="s" class="text__description">
          {{ sectionNineData.text }}
          </Paragraph>
        </div>
        <div class="content__image" :style="{ backgroundImage: `url(${sectionNineData.imageBackground})` }">
        </div>
      </div>
    </Container>
  </section>
</template>
<style lang="scss" scoped>
@import './style.scss';
</style>