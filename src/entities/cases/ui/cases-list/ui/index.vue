<script setup lang="ts">
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Button } from '@/shared/ui/button';
import { RouterLink } from 'vue-router';
import { CaseItem } from '@/entities/cases/model/cases.types';
import { useStore } from 'vuex';



interface Props {
  casesData: CaseItem[];
}
const { casesData } = defineProps<Props>();

const store = useStore();

const getTitleImage = (slug: string) => {
  return store.getters['cases/getTitleImage'](slug)?.path;
};

</script>

<template>
  <div class="cases-item" v-for="item in casesData" :key="item.id">
    <div class="cases-item__image" :style="{ backgroundImage: `url(${getTitleImage(item.slug)})` }"
      :aria-label="`${item.name}`" />
    <Paragraph tagName="p" size="xxl" color="dark" class="cases-item__title">
      {{ item.name }}
      
    </Paragraph>
    <Paragraph tagName="p" size="xs" color="dark-gray" class="cases-item__description">
      {{ item.description[0].introduction }}
    </Paragraph>
    <RouterLink :to="`/cases/${item.slug}`" class="cases-item__link">
      <Button tagName="button" size="xs" color="white" type="none">
        <Paragraph tagName="span" size="m" color="dark">
          узнать подробнее
        </Paragraph>
      </Button>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>
