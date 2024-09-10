<script setup lang="ts">
import { defineEmits } from 'vue';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { useSidebarLogic, Category } from '../model/sidebar.model';

const props = defineProps<{
  data: Category[];
}>();

const emit = defineEmits<{
  (e: 'category-selected', category: string | null): void;
}>();

const { isActive, handleCategoryClick } = useSidebarLogic();
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__items">
      <div class="item" :class="isActive(null)" @click="handleCategoryClick(null)">
        <span class="item__dot"></span>
        <Paragraph tagName="span" size="m" color="dark-gray" class="item__text">
          Все виды
        </Paragraph>
      </div>
      <div class="item" v-for="item in props.data" :key="item.id" :class="isActive(item.category)"
           @click="handleCategoryClick(item.category)">
        <span class="item__dot"></span>
        <Paragraph tagName="span" size="m" color="dark-gray" class="item__text">
          {{ item.category }}
        </Paragraph>
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>
