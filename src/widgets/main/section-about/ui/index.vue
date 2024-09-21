<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
import { VideoPlayer } from '@/features/video-player/'
interface DescriptionItem {
    id: number;
    iconType: string;
    text: string;
}
interface Props {
    sectionAboutData: {
        title: string;
        text: string;
        description: DescriptionItem[];
        iframeBackground: string;
        linkVideo: string;
        iframeText: string;
    };
}
const { sectionAboutData } = defineProps<Props>();
</script>
<template>
    <section class="section-about">
        <Container tagName="div" size="m">
            <div class="section-about__content">
                <div class="section-about__text">
                    <div class="title__items">
                        <Heading tagName="h2" regular size="xl" class="text__title">
                            {{ sectionAboutData.title }}
                        </Heading>
                        <div class="badge">
                            <Icon type="snow" color="none" />
                        </div>
                    </div>
                    <Paragraph tagName="p" color="dark-gray" size="l" class="text__description">
                        {{ sectionAboutData.text }}
                    </Paragraph>
                    <div class="item" v-for="item in sectionAboutData.description" :key="item.id">
                        <Circle tagName="button" color="light-blue-first" size="m" class="item__icon">
                            <icon :type="item.iconType" color="none"></icon>
                        </Circle>
                        <Paragraph tagName="p" color="dark-gray" size="m" class="item__text">
                            {{ item.text }}
                        </Paragraph>
                    </div>
                </div>
                <VideoPlayer :data="sectionAboutData" />
            </div>
        </Container>
    </section>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>