import { computed } from 'vue';
import { useStore } from 'vuex';
export interface Category {
  id: number;
  category: string;
}
export const useSidebarLogic = () => {
  const store = useStore();
  const selectedCategory = computed(() => store.getters['sidebar/selectedCategory']);

  const isActive = (currentCategory: string | null) => {
    return selectedCategory.value === currentCategory ? 'item_active' : '';
  };

  const handleCategoryClick = (category: string | null) => {
    store.dispatch('sidebar/selectCategory', category);
  };

  return {
    selectedCategory,
    isActive,
    handleCategoryClick
  };
};
