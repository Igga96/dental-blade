<script setup lang="ts">
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Button } from '@/shared/ui/button';
import { RouterLink } from 'vue-router';
import { CaseItem } from '../model/cases.types';

interface Props {
  casesData: CaseItem[];
}
const { casesData } = defineProps<Props>();
</script>

<template>
    <div class="cases-item" v-for="item in casesData" :key="item.id">
      <img :src="item.imgPath" alt="cases_image" class="cases-item__image" />
      <Paragraph tagName="p" size="xxl" color="dark" class="cases-item__title">
        {{ item.name }}
      </Paragraph>
      <Paragraph tagName="p" size="xxl" color="dark-gray" class="cases-item__description">
        {{ item.description }}
      </Paragraph>
      <RouterLink :to="item.link" class="cases-item__link">
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