<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const isHomePage = computed(() => route.path === '/')
const isInputVisible = ref(false);

const toggleInputVisibility = () => {
    isInputVisible.value = !isInputVisible.value;
};
</script>

<template>
    <div class="search">
        <input 
            type="text" 
            :class="['search-field', { 'search-field_visible': isInputVisible }, {'serach-fild-white-theme' : !isHomePage, '': isHomePage }]"
            placeholder="Введите текст" 
        />
        <Circle tagName="button" size="s" color="accent" @click="toggleInputVisibility">
            <Icon tagName="svg" color="white" type="search" />
        </Circle>
    </div>
</template>

<style scoped lang="scss">
.search {
    display: flex;
    align-items: center;
    overflow: hidden;
}

input {
    transition: max-width 0.3s ease-in-out, opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    max-width: 0;
    opacity: 0;
    height: 45px;
    border-radius: 90px;
    margin-left: 10px; 
    border: none;
    transform: translateX(-10px); 
    
}

input.search-field_visible {
    opacity: 1;
    min-width: 300px; 
    transform: translateX(0); 
    padding-left: 20px;
    border: none;
    font-size: 14px;
    margin-right: 10px;
}

input:focus {
    outline: none;
}
input.serach-fild-white-theme{
    border: 1px solid #F1F2F4;
    &:focus{
        border: 1px solid #23262F;
    }
}

.circle {
    width: 45px;
    height: 45px;
    cursor: pointer;
    z-index: 1111;
}

.circle:hover {
    background: #3D4FB3;
}
</style>
