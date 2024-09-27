import { ref, computed, Ref } from 'vue';

export function useSlider(container: Ref<HTMLElement | null>) {
  const currentIndex = ref(0);
  
  const isPrevDisabled = computed(() => currentIndex.value === 0);
  const isNextDisabled = computed(() => {
    if (!container.value) return true;
    const itemWidth = container.value.firstElementChild?.clientWidth || 0;
    return currentIndex.value >= container.value.childElementCount - 1;
  });

  function next() {
    if (!container.value || isNextDisabled.value) return;
    const itemWidth = container.value.firstElementChild?.clientWidth || 0;
    currentIndex.value += 1;
    container.value.scrollLeft += itemWidth;
  }

  function prev() {
    if (!container.value || isPrevDisabled.value) return;
    const itemWidth = container.value.firstElementChild?.clientWidth || 0;
    currentIndex.value -= 1;
    container.value.scrollLeft -= itemWidth;
  }

  return { prev, next, isPrevDisabled, isNextDisabled };
}
