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
const isDataReady = ref(false); // Флаг готовности данных

// Используем watch для отслеживания изменений маршрута и установки флага
watch(
    () => route,
    () => {
        isDataReady.value = true; // Устанавливаем флаг в true, когда маршрут изменился
    },
    { immediate: true } // Устанавливаем флаг сразу при инициализации
);

const breadcrumbsLinks = computed(() => {
    return route.matched.map((match) => ({
        label: match.meta?.breadcrumb || match.name,
        path: match.path
    }));
});

const lastBreadcrumb = computed(() => ({
    label: props.dynamicLabel || breadcrumbsLinks.value[breadcrumbsLinks.value.length - 1].label,
    path: route.fullPath
}));

const isChildRoute = computed(() => route.path.split('/').length > 2);
</script>

<template>
    <div v-if="isDataReady" class="breadcrumbs">
        <RouterLink to="/" class="breadcrumbs__link">
            <Paragraph tagName="span" size="xs" color="dark-gray" class="link__text">
                Главная
            </Paragraph>
        </RouterLink>
        <RouterLink v-for="(link, index) in breadcrumbsLinks.slice(0, -1)" :key="index" :to="link.path"
            class="breadcrumbs__link">
            <Paragraph tagName="span" size="xs" color="dark-gray" class="link__text">
                <Paragraph tagName="span" size="xs" color="dark-gray" class="link__arrow">
                    &#8250;
                </Paragraph>
                {{ link.label }}
            </Paragraph>
        </RouterLink>
        <RouterLink v-if="isChildRoute" :to="lastBreadcrumb.path" class="breadcrumbs__link">
            <Paragraph tagName="span" size="xs" color="dark-gray" class="link__text">
                <Paragraph tagName="span" size="xs" color="dark-gray" class="link__arrow">
                    &#8250;
                </Paragraph>
                {{ lastBreadcrumb.label }}
            </Paragraph>
        </RouterLink>
    </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>
