<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
interface Props {
  sectionSecondData: {
    id: number;
    iconType: string;
    title: string;
  }[]
}
const { sectionSecondData } = defineProps<Props>();
</script>
<template>
<section class="section-second">
    <Container>
      <div class="section-second__content">
        <div class="item" v-for="item in sectionSecondData" :key="item.id">
          <Circle tagName="span" color="white" size="m">
            <Icon :type="item.iconType" color="none"/>
          </Circle>
          <Paragraph tagName="p" color="dark" size="xs">
            {{item.title}}
          </Paragraph>
        </div>
      </div>
    </Container>
  </section>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>