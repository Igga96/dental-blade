import { ref, onMounted, onUnmounted, Ref } from 'vue';

interface UseSwipeOptions {
  elementRef: Ref<HTMLElement | null>;
}

export function useSwipe({ elementRef }: UseSwipeOptions) {
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

  const preventDrag = (event: DragEvent) => {
    event.preventDefault();
  };

  onMounted(() => {
    if (elementRef.value) {
      elementRef.value.addEventListener('touchstart', touchStart);
      elementRef.value.addEventListener('touchmove', touchMove);
      elementRef.value.addEventListener('touchend', touchEnd);

      elementRef.value.addEventListener('mousedown', mouseDown);
      elementRef.value.addEventListener('mousemove', mouseMove);
      elementRef.value.addEventListener('mouseup', mouseUp);
      elementRef.value.addEventListener('mouseleave', mouseUp);
      
      const images = elementRef.value.querySelectorAll('img');
      images.forEach((img) => {
        img.addEventListener('dragstart', preventDrag);
      });

      const links = elementRef.value.querySelectorAll('a');
      links.forEach((link) => {
        link.addEventListener('dragstart', preventDrag);
      });
    }
  });

  onUnmounted(() => {
    if (elementRef.value) {
      elementRef.value.removeEventListener('touchstart', touchStart);
      elementRef.value.removeEventListener('touchmove', touchMove);
      elementRef.value.removeEventListener('touchend', touchEnd);

      elementRef.value.removeEventListener('mousedown', mouseDown);
      elementRef.value.removeEventListener('mousemove', mouseMove);
      elementRef.value.removeEventListener('mouseup', mouseUp);
      elementRef.value.removeEventListener('mouseleave', mouseUp);

      const images = elementRef.value.querySelectorAll('img');
      images.forEach((img) => {
        img.removeEventListener('dragstart', preventDrag);
      });

      const links = elementRef.value.querySelectorAll('a');
      links.forEach((link) => {
        link.removeEventListener('dragstart', preventDrag);
      });
    }
  });

  return {
    currentTranslate,
  };
}
