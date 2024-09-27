<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { useRoute } from 'vue-router';
import { computed, ref, watch } from 'vue';

const props = defineProps({
    dynamicLabel: {
        type: String,
        default: ''
    }
});

const route = useRoute();
const isDataReady = ref(false);

watch(
    () => route,
    () => {
        isDataReady.value = true;
    },
    { immediate: true }
);

const breadcrumbsLinks = computed(() => {
    return route.matched.map((match) => ({
        label: match.name,
        path: match.path
    }));
});

const lastBreadcrumb = computed(() => ({
    label: props.dynamicLabel || route.params.slug || route.name,
    path: route.fullPath
}));

const isChildRoute = computed(() => route.path.split('/').length > 2);
</script>

<template>
    <div v-if="isDataReady" class="breadcrumbs">

        <RouterLink to="/" class="breadcrumbs__link">
            <Paragraph tagName="span" color="dark-gray" class="link__text">
                Главная
            </Paragraph>
        </RouterLink>

        <template v-if="dynamicLabel.length">
            <RouterLink v-for="(link, index) in breadcrumbsLinks.slice(0, -1)" :key="index" :to="link.path"
                class="breadcrumbs__link">
                <Paragraph tagName="span" color="dark-gray" class="link__text">
                    <Paragraph tagName="span" color="dark-gray" class="link__arrow">
                        &#8250;
                    </Paragraph>
                    {{ link.label }}
                </Paragraph>
            </RouterLink>
        </template>

        <Paragraph tagName="span" color="dark-gray" class="link__text" >
            <Paragraph tagName="span" color="dark-gray" class="link__arrow">
                &#8250;
            </Paragraph>
            {{ lastBreadcrumb.label }}
        </Paragraph>
    </div>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>
