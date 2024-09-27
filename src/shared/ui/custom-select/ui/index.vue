<script setup lang="ts">
import { Paragraph } from '@/shared/ui/text/paragraph';
import { defineProps, defineEmits, ref, watch } from 'vue';

interface Option {
  [key: string]: any;
}

const props = defineProps({
  options: {
    type: Array as () => Option[],
    default: () => [],  
  },
  placeholder: {
    type: String,
    default: 'Select an option',
  },
  labelKey: {
    type: String,
    default: 'name',
  },
  valueKey: {
    type: String,
    default: 'id',
  },
  isActive: Boolean, 
});

const emit = defineEmits(['select', 'toggle']); 

const selectedOption = ref<number | null>(null);

const handleSelect = (value: number) => {
  selectedOption.value = value;
  emit('select', selectedOption.value);
  emit('toggle', false);  
};

watch(() => props.isActive, (newVal) => {
  if (!newVal) {
    emit('toggle', false);
  }
});
</script>

<template>
  <div class="custom-select" @click="emit('toggle', !props.isActive)">
    <div class="selected">
      <Paragraph tagName="span" size="xs" color="dark-gray" v-if="selectedOption === null">
        {{ placeholder }}
      </Paragraph>
      <span v-else>{{ options?.find(option => option[valueKey] === selectedOption)?.[labelKey] }}</span>
    </div>
    <div v-if="props.isActive" class="dropdown">
      <div 
        v-for="option in options" 
        :key="option[valueKey]" 
        class="option" 
        @click.stop="handleSelect(option[valueKey])"
      >
        {{ option[labelKey] }}
      </div>
    </div>
  </div>
</template>


<style scoped>
.custom-select {
    position: relative;
    cursor: pointer;

}

.selected {
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-wrap: nowrap;
    width: 100%;
}

.dropdown {
    padding: 20px 10px 0 5px;
    position: absolute;
    background: white;
    z-index: 1;
    min-width: 400px;
    max-height: 350px;
    overflow-y: auto;
    display: flex;
    gap: 10px;
    flex-direction: column;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
}

.option {
    cursor: pointer;
    width: 100%;
}

.option:hover {
    color: #4963FF;
}
</style>
