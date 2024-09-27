import { Ref, onMounted, onUnmounted } from 'vue';

interface UseMouseSwipeOptions {
  elementRef: Ref<HTMLElement | null>;
  onSwipe?: () => void; 
}

export function useMouseSwipe({ elementRef, onSwipe }: UseMouseSwipeOptions) {
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let isDragging = false;
  let isSwiping = false; 
  let swipeTimeout: ReturnType<typeof setTimeout> | null = null;

  const mouseDown = (event: MouseEvent) => {
    startX = event.clientX;
    isDragging = true;
    document.body.style.userSelect = 'none';
    if (swipeTimeout) {
      clearTimeout(swipeTimeout);
    }
  };

  const mouseMove = (event: MouseEvent) => {
    if (!isDragging) return;

    const currentX = event.clientX;
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

  const mouseUp = (event: MouseEvent) => {
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
      elementRef.value.addEventListener('mousedown', mouseDown);
      elementRef.value.addEventListener('mousemove', mouseMove);
      elementRef.value.addEventListener('mouseup', mouseUp);
      elementRef.value.addEventListener('mouseleave', mouseUp);

      const links = elementRef.value.querySelectorAll('a');
      links.forEach((link) => {
        link.addEventListener('dragstart', (event) => event.preventDefault());
      });
    }
  };

  const cleanupEvents = () => {
    if (elementRef.value) {
      elementRef.value.removeEventListener('mousedown', mouseDown);
      elementRef.value.removeEventListener('mousemove', mouseMove);
      elementRef.value.removeEventListener('mouseup', mouseUp);
      elementRef.value.removeEventListener('mouseleave', mouseUp);

      const links = elementRef.value.querySelectorAll('a');
      links.forEach((link) => {
        link.removeEventListener('dragstart', (event) => event.preventDefault());
      });
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
