<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { RouterLink } from 'vue-router';
import { ImplantationSlider } from '@/features/slider/ui/implantation-slider';
</script>

<template>
    <section class="section-implantation">
        <Container>
        <RouterLink to="/promotions">
            <Heading tagName="h2" regular size="xl">
                у нас имплантация
                <Paragraph tagName="span" size="parent" color="gray">
                    доступна каждому
                </Paragraph>
                без мнимой экономии!
            </Heading>
        </RouterLink>
        </Container>
        <ImplantationSlider />
    </section>
</template>
<style lang="scss" scoped>
.section-implantation {
    overflow: hidden;

    h2 {
        margin: 200px 0 70px;
        max-width: 1200px;
    }

}

@media screen and (max-width: 768px) {
    .section-implantation {
        h2 {
            margin: 100px 0 40px;
        }
    }
}
</style>