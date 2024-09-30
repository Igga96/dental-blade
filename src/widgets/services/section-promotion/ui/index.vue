<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Button } from '@/shared/ui/button';
import { Dots } from '@/shared/ui/dots'
interface PromotionItem {
  id: number;
  name: string;
  oldPrice: string;
  newPrice: string;
  promotion?: string;
}
interface Props {
  sectionPromotionData: {
    title: string;
    promotions: PromotionItem[];
  };
}
const { sectionPromotionData } = defineProps<Props>();
</script>

<template>
  <section class="section-promotion">
    <Container>
      <Heading tagName="h2" regular size="xl">
        {{sectionPromotionData.title}}
      </Heading>
      <div class="promotion__content">
        <div class="content__items">
          <div class="item" v-for="item in sectionPromotionData.promotions" :key="item.id">
            <Paragraph tagName="span" color="dark" size="xxl" class="discount" v-if="item.promotion">скидка -30%</Paragraph>
            <div class="text">
              <div class="title__items">
                <Paragraph tagName="p" color="dark" size="xxl" class="title">
                  {{item.name}}
                  <Dots />
                </Paragraph>
              </div>
              <div class="price">
                <Paragraph tagName="span" color="dark-gray" size="xxl">{{item.oldPrice}}</Paragraph>
                <Paragraph tagName="span" color="red" size="xxl">{{item.newPrice}}</Paragraph>
              </div>
            </div>
            <Button tagName="button" size="xs" type="none" color="white" >
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>