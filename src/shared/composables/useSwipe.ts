import { ref, onMounted, onUnmounted, Ref } from 'vue';

interface UseSwipeOptions {
  elementRef: Ref<HTMLElement | null>;
}

export function useSwipe({ elementRef }: UseSwipeOptions) {
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let isDragging = false;

  const touchStart = (event: TouchEvent) => {
    startX = event.touches[0].clientX;
    isDragging = true;
  };

  const touchMove = (event: TouchEvent) => {
    if (!isDragging) return;

    const currentX = event.touches[0].clientX;
    const diff = currentX - startX;
    currentTranslate = prevTranslate + diff;

    if (elementRef.value) {
      elementRef.value.style.transform = `translateX(${currentTranslate}px)`;
    }
  };

  const touchEnd = () => {
    isDragging = false;
    prevTranslate = currentTranslate;
  };

  onMounted(() => {
    if (elementRef.value) {
      elementRef.value.addEventListener('touchstart', touchStart);
      elementRef.value.addEventListener('touchmove', touchMove);
      elementRef.value.addEventListener('touchend', touchEnd);
    }
  });

  onUnmounted(() => {
    if (elementRef.value) {
      elementRef.value.removeEventListener('touchstart', touchStart);
      elementRef.value.removeEventListener('touchmove', touchMove);
      elementRef.value.removeEventListener('touchend', touchEnd);
    }
  });

  return {
    currentTranslate,
  };
}
