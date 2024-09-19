<script setup lang="ts">
interface Props {
    data: {
        iframeBackground: string;
        linkVideo: string;
    };
}
const { data } = defineProps<Props>();
</script>
<template>
    <div class="video-player" :style="{ backgroundImage: `url(${data.iframeBackground})` }">
        <iframe :src="data.linkVideo" frameborder="0">
        </iframe>
    </div>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>