<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { ReviewsSlider } from '@/features/slider/ui/reviews-slider'

</script>
<template>
    <section class="section-reviews">
        <Container tagName="div" size="m">
            <Heading tagName="h2" regular size="xl">
                посмотрите отзывы наших клиентов и убедитесь что
                <Paragraph tagName="span" size="parent" color="gray">
                    дентал клиник
                </Paragraph>
                - лучший выбор
            </Heading>
        </Container>
        <ReviewsSlider />
    </section>
</template>
<style lang="scss">
.section-reviews {
    overflow: hidden;
    h2 {
        margin: 200px 0 70px;
        max-width: 1100px;
    }

}


@media screen and (max-width: 768px) {
    .section-reviews {
        h2 {
            margin: 100px 0 40px;
        }

    }
}
</style>