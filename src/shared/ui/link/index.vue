<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
    tagName: 'a' | 'router-link';
    size: 'xs' | 's' | 'none';
}
const props = defineProps<Props>()
</script>
<template>
    <component :is="props.tagName" :class="['nav-link', size ? `nav-link__size-${size}` : '']">
        <slot></slot>
    </component>
</template>
<style scoped>  .nav-link {
      font-size: 14px;
  }

  .nav-link__size-s {
      padding: 12px 30px;
      /* border: 1px solid rgba(0, 0, 0, 0.05);*/
      border-radius: 30px;
      /* background: rgba(0, 0, 0, 0.15);*/
      border: 1px solid #F1F2F4;
      color: black;
      font-size: 14px;

  }
</style>