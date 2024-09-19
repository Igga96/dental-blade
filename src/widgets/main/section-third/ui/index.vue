<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
import { VideoPlayer } from '@/features/video-player'
interface DescriptionItem {
    id: number;
    iconType: string;
    count: string;
    text: string;
}

interface Props {
    sectionThirdData: {
        title: string;
        description: DescriptionItem[];
        iframeBackground: string;
        linkVideo: string;
    };
}

const { sectionThirdData } = defineProps<Props>();
</script>
<template>
    <section class="section-third">
        <Container tagName="div" size="m">
            <Heading tagName="h2" regular size="xl">
                {{ sectionThirdData.title }}
            </Heading>
            <div class="section-third__content">
                <div v-for="(item, index) in sectionThirdData.description" :key="item.id"
                    :class="['item', `item-${index + 1}`]">
                    <Circle tagName="span" color="white" size="m" class="item__icon">
                        <Icon :type="item.iconType" color="accent" />
                    </Circle>
                    <div class="item__description">
                        <Paragraph tagName="span" size="l" color="dark" class="item__count">
                            {{ item.count }}
                        </Paragraph>
                        <Paragraph tagName="p" size="l" color="dark-gray" class="item__text">
                            {{ item.text }}
                        </Paragraph>
                    </div>
                </div>
                <VideoPlayer :data="sectionThirdData" />
            </div>
        </Container>
    </section>
</template>
<style lang="scss" scoped>
@import './style.scss';
</style>