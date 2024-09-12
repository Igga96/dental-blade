<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';
import { Paragraph } from '@/shared/ui/text/paragraph';

const store = useStore();

const uniqueSpecialties = computed(() => store.getters['doctors/uniqueSpecialties']);
const selectedSpecialty = computed(() => store.state.doctors.selectedSpecialty);

function selectSpecialty(specialty: string) {
    store.commit('doctors/setSelectedSpecialty', specialty);
}
</script>

<template>
  <div class="tags">
    <ul class="tags__list">
      <li @click="selectSpecialty('')" :class="{ 'item_active': selectedSpecialty === '' }" class="item">
        <Paragraph tagName="span" size="xs" color="dark-gray" class="item__text">
          Все специалисты
        </Paragraph>
      </li>
      <li v-for="specialty in uniqueSpecialties" :key="specialty" @click="selectSpecialty(specialty)" :class="{ 'item_active': selectedSpecialty === specialty }" class="item">
        <Paragraph tagName="span" size="xs" color="dark-gray" class="item__text">
          {{ specialty }}
        </Paragraph>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>