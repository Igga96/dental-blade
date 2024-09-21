<script setup lang="ts">
import { ref } from 'vue';
import { Circle } from '@/shared/ui/circle';
import { Icon } from '@/shared/ui/icons';
import { Paragraph } from '@/shared/ui/text/paragraph';

interface Props {
    data: {
        iframeBackground: string;
        linkVideo: string;
        iframeText: string;
    };
}

const { data } = defineProps<Props>();

const isPlaying = ref(false);

const playVideo = () => {
    isPlaying.value = true;
};

</script>

<template>
    <div class="video-player" :style="{ backgroundImage: isPlaying ? 'none' : `url(${data.iframeBackground})` }">
        <div class="video-player__smooth-background">
            <iframe v-if="isPlaying" :src="data.linkVideo" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
            <div class="play-button__content" v-if="!isPlaying">
                <Circle tagName="button" color="opacity-light" size="l" class="play-button" @click="playVideo">
                    <Icon type="play" color="none" />
                </Circle>
                <Paragraph tagName="p" size="xs" color="white">
                {{data.iframeText}}
                </Paragraph>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>