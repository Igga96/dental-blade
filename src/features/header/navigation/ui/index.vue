<script setup lang="ts">
import { Paragraph } from '@/shared/ui/text/paragraph';
import { RouterLink } from 'vue-router';
interface Props {
    data: {
        name: string;
        link: string;
    }
}
const { data } = defineProps<Props>();

</script>
<template>
    <nav class="navigation">
        <ul class="navigation__list">
            <li v-for="item in data" :key="item.name" class="item">
                <RouterLink :to="item.link" tagName="roter-link" class="item__link">
                    <Paragraph tag-name="span" size="xs" color="dark" class="item__text">
                        {{ item.name }}
                    </Paragraph>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
<style scoped lang="scss">
@import './style.scss'
</style>