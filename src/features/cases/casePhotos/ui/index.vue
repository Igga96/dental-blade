<script setup lang="ts">
import { computed } from 'vue';
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

const isPrevDisabled = computed(() => currentImageIndex.value === 0);
const isNextDisabled = computed(() => currentImageIndex.value === images.length - 1);
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
            <Button tagName="button" size="xs" color="white" type="circle" 
                    :class="{ 'button_disabled': isPrevDisabled }"
                    @click="prevImage" :disabled="isPrevDisabled">
                <Icon type="arrowLeft" color="none" />
            </Button>
            <Button tagName="button" size="xs" color="white" type="circle" 
                    :class="{ 'button_disabled': isNextDisabled }"
                    @click="nextImage" :disabled="isNextDisabled">
                <Icon type="arrowRight" color="none" />
            </Button>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>
