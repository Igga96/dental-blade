import { Ref, onMounted, onUnmounted } from 'vue';

interface UseTouchSwipeOptions {
  elementRef: Ref<HTMLElement | null>;
  onSwipe?: () => void; 
}

export function useTouchSwipe({ elementRef, onSwipe }: UseTouchSwipeOptions) {
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let isDragging = false;
  let isSwiping = false; 
  let swipeTimeout: ReturnType<typeof setTimeout> | null = null;

  const touchStart = (event: TouchEvent) => {
    startX = event.touches[0].clientX;
    isDragging = true;
    document.body.style.userSelect = 'none';

    if (swipeTimeout) {
      clearTimeout(swipeTimeout);
    }
  };

  const touchMove = (event: TouchEvent) => {
    if (!isDragging) return;

    const currentX = event.touches[0].clientX;
    const diff = currentX - startX;
    currentTranslate = prevTranslate + diff;

    if (elementRef.value) {
      elementRef.value.style.transform = `translateX(${currentTranslate}px)`;
    }

    isSwiping = true; 

    if (!swipeTimeout) {
      swipeTimeout = setTimeout(() => {
        isSwiping = true;
        if (onSwipe) {
          onSwipe();
        }
      }, 100);
    }
  };

  const touchEnd = (event: TouchEvent) => {
    isDragging = false;
    prevTranslate = currentTranslate;
    document.body.style.userSelect = '';

    if (isSwiping) {
      event.preventDefault(); 
    }
    isSwiping = false; 
    swipeTimeout = null; 
  };

  const initializeEvents = () => {
    if (elementRef.value) {
      elementRef.value.addEventListener('touchstart', touchStart);
      elementRef.value.addEventListener('touchmove', touchMove);
      elementRef.value.addEventListener('touchend', touchEnd);
    }
  };

  const cleanupEvents = () => {
    if (elementRef.value) {
      elementRef.value.removeEventListener('touchstart', touchStart);
      elementRef.value.removeEventListener('touchmove', touchMove);
      elementRef.value.removeEventListener('touchend', touchEnd);
    }
  };

  onMounted(() => {
    initializeEvents();
  });

  onUnmounted(() => {
    cleanupEvents();
  });

  return {
    currentTranslate,
  };
}
