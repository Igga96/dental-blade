<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'

</script>
<template>
    <section class="section-reviews">
        <Container tagName="div" size="m">
            <Heading tagName="h2" regular size="xl">посмотрите отзывы наших клиентов и убедитесь что Дентал Клиник - лучший
                выбор</Heading>
        </Container>
        <div class="carousel">
            <div class="carousel__item">
                <div>
                    <img src="" alt="">
                    <div>
                        <span>Сергей Иванов</span>
                        <span>24 июля 2024</span>
                    </div>
                </div>
                <p>Отличная стоматологическая клиника с высококвалифицированными специалистами и современным оборудованием.
                    Обслуживание на высшем уровне, лечить зубы здесь — одно удовольствие!</p>
                <span>4</span>
            </div>
            <div class="carousel__item">
                <div>
                    <img src="" alt="">
                    <div>
                        <span>Сергей Иванов</span>
                        <span>24 июля 2024</span>
                    </div>
                </div>
                <p>Отличная стоматологическая клиника с высококвалифицированными специалистами и современным оборудованием.
                    Обслуживание на высшем уровне, лечить зубы здесь — одно удовольствие!</p>
                <span>4</span>
            </div>
            <div class="carousel__item">
                <div>
                    <img src="" alt="">
                    <div>
                        <span>Сергей Иванов</span>
                        <span>24 июля 2024</span>
                    </div>
                </div>
                <p>Отличная стоматологическая клиника с высококвалифицированными специалистами и современным оборудованием.
                    Обслуживание на высшем уровне, лечить зубы здесь — одно удовольствие!</p>
                <span>4</span>
            </div>
            <div class="carousel__item">
                <div>
                    <img src="" alt="">
                    <div>
                        <span>Сергей Иванов</span>
                        <span>24 июля 2024</span>
                    </div>
                </div>
                <p>Отличная стоматологическая клиника с высококвалифицированными специалистами и современным оборудованием.
                    Обслуживание на высшем уровне, лечить зубы здесь — одно удовольствие!</p>
                <span>4</span>
            </div>
            <div class="carousel__item">
                <div>
                    <img src="" alt="">
                    <div>
                        <span>Сергей Иванов</span>
                        <span>24 июля 2024</span>
                    </div>
                </div>
                <p>Отличная стоматологическая клиника с высококвалифицированными специалистами и современным оборудованием.
                    Обслуживание на высшем уровне, лечить зубы здесь — одно удовольствие!</p>
                <span>4</span>
            </div>
            <div class="carousel__item">
                <div>
                    <img src="" alt="">
                    <div>
                        <span>Сергей Иванов</span>
                        <span>24 июля 2024</span>
                    </div>
                </div>
                <p>Отличная стоматологическая клиника с высококвалифицированными специалистами и современным оборудованием.
                    Обслуживание на высшем уровне, лечить зубы здесь — одно удовольствие!</p>
                <span>4</span>
            </div>
        </div>
    </section>

</template>
<style lang="scss">
.section-reviews {
    h2 {
        margin: 200px 0 70px;
    }

    .carousel {
        padding-left: 110px;
        display: flex;
        gap: 10px;
        overflow: hidden;
        position: relative;

        .carousel__item {
            border: 1px solid rgba(230, 232, 236, 0.3);
            border-radius: 25px;
            background: rgb(252, 252, 253);
            padding: 30px;
        }
    }

}
</style>