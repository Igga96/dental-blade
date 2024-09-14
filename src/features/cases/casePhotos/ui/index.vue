<script setup lang="ts">
import { useImageSlider } from '@/features/cases/casePhotos/model/casePhotos.model';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icons';

interface Image {
    id: number;
    path: string;
    isTitle: boolean;
}
interface Props {
    images: Image[];
    caseName: string;
}
const { images, caseName } = defineProps<Props>();
const { currentImageIndex, prevImage, nextImage, setCurrentImage } = useImageSlider(images);
</script>

<template>
    <div class="case-photos">
        <div class="photos__selected-image">
            <img :src="images[currentImageIndex].path" :alt="caseName" />
        </div>
        <div class="photos__thumbnails">
            <img v-for="(image, index) in images" :key="image.id" :src="image.path" :alt="caseName" class="thumbnail"
                :class="{ active: index === currentImageIndex }" @click="setCurrentImage(index)" />
        </div>
        <div class="photos__slider">
            <img v-for="(image, index) in images" :key="image.id" :src="image.path" :alt="caseName" class="thumbnail"
                :class="{ active: index === currentImageIndex }" />
        </div>
        <div class="btn__slide">
            <Button tagName="button" size="xs" color="white" type="circle" @click="prevImage">
                <Icon type="arrowLeft" color="none" />
            </Button>
            <Button tagName="button" size="xs" color="white" type="circle" @click="nextImage">
                <Icon type="arrowRight" color="none" />
            </Button>
        </div>
    </div>
</template> 
<style scoped lang="scss">
@import './style.scss';
</style>
