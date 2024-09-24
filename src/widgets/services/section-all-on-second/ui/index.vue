<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Circle } from '@/shared/ui/circle';
import { VideoPlayer } from '@/features/video-player'
interface CardItem {
  id: number;
  title: string;
  text: string;
}
interface Props {
  sectionAllOnSecondData: {
    title: string;
    cards: CardItem[];
    iframeBackground: string;
    linkVideo: string;
    iframeText: string;
  };
}
const { sectionAllOnSecondData } = defineProps<Props>();
</script>

<template>
  <section class="section-all-on-second">
    <Container>
      <Heading tagName="h2" regular size="xl">
        имплантация All-on-4:<br>
        как это происходит и что включает в себя.
      </Heading>
      <div class="section-all-on-second__content">
        <VideoPlayer :data="sectionAllOnSecondData"/>
          <div class="content__cards">

            <div class="item" v-for="item in sectionAllOnSecondData.cards" :key="item.id">
              <Circle tagName="span" color="white" size="s">
                <Paragraph tagName="span" color="accent" size="xxl">0{{item.id+1}}</Paragraph>
              </Circle>
              <div class="item__text">
                <Paragraph tagName="p" color="dark" size="xxl" class="title">
                  {{item.title}}
                </Paragraph>
                <Paragraph tagName="p" color="dark-gray" size="xs">
                  {{item.text}}
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