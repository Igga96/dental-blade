import { ref } from 'vue';

interface Image {
    id: number;
    path: string;
    isTitle: boolean;
}

export function useImageSlider(images: Image[]) {
    const currentImageIndex = ref(images.findIndex((image) => image.isTitle) || 0);

    const prevImage = () => {
        if (currentImageIndex.value > 0) {
            currentImageIndex.value--;
        }
    };

    const nextImage = () => {
        if (currentImageIndex.value < images.length - 1) {
            currentImageIndex.value++;
        }
    };

    const setCurrentImage = (index: number) => {
        currentImageIndex.value = index;
    };

    return {
        currentImageIndex,
        prevImage,
        nextImage,
        setCurrentImage,
    };
}
