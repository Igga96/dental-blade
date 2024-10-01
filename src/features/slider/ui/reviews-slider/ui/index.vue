<script setup lang="ts">
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Rating } from '@/shared/ui/rating';
import { Slider } from '@/shared/ui/slider';

import { useSwipe } from '@/shared/composables/useSwipe'
import { ref } from 'vue';

const itemsContainer = ref<HTMLElement | null>(null);
useSwipe({ elementRef: itemsContainer });
</script>

<template>
    <Slider>
        <div class="reviews-slider__container" ref="itemsContainer">
            <div class="item">
                <div class="item__description">
                    <div class="item__title">
                        <div class="img">
                            <img src="@/assets/images/reviews/rewiew_avatar_1.png" alt="img">
                        </div>
                        <div class="name">
                            <Paragraph tagName="p" color="dark" size="xxl">
                                Сергей Иванов
                            </Paragraph>
                            <Paragraph tagName="p" color="dark-gray" size="xs">
                                24 июля 2024
                            </Paragraph>
                        </div>
                    </div>
                    <Paragraph tagName="p" color="dark-gray" size="xs" class="description">
                        Отличная стоматологическая клиника с высококвалифицированными специалистами и современным
                        оборудованием.
                        Обслуживание на высшем уровне, лечить зубы здесь — одно удовольствие!24 июля 2024
                    </Paragraph>
                </div>
                <Rating />
            </div>
            <div class="item">
                <div class="item__description">
                    <div class="item__title">
                        <div class="img">
                            <img src="@/assets/images/reviews/rewiew_avatar_2.png" alt="img">
                        </div>
                        <div class="name">
                            <Paragraph tagName="p" color="dark" size="xxl">
                                Ирина Смирнова
                            </Paragraph>
                            <Paragraph tagName="p" color="dark-gray" size="xs">
                                20 июля 2024
                            </Paragraph>
                        </div>
                    </div>
                    <Paragraph tagName="p" color="dark-gray" size="xs" class="description">
                        Замечательная стоматологическая клиника с высококлассными специалистами и новейшим оборудованием.
                        Лечение прошло быстро и безболезненно, а заботливый персонал сделал визит максимально комфортным.
                    </Paragraph>
                </div>
                <Rating />
            </div>
            <div class="item">
                <div class="item__description">
                    <div class="item__title">
                        <div class="img">
                            <img src="@/assets/images/reviews/rewiew_avatar_3.png" alt="img">
                        </div>
                        <div class="name">
                            <Paragraph tagName="p" color="dark" size="xxl">
                                Камила Самойлова
                            </Paragraph>
                            <Paragraph tagName="p" color="dark-gray" size="xs">
                                12 июля 2024
                            </Paragraph>
                        </div>
                    </div>
                    <Paragraph tagName="p" color="dark-gray" size="xs" class="description">
                        Прекрасная стоматологическая клиника с индивидуальным подходом к каждому пациенту. Внимание к
                        деталям и современные методы лечения оставили только положительные впечатления.
                    </Paragraph>
                </div>
                <Rating />
            </div>
            <div class="item">
                <div class="item__description">
                    <div class="item__title">
                        <div class="img">
                            <img src="@/assets/images/reviews/rewiew_avatar_1.png" alt="img">
                        </div>
                        <div class="name">
                            <Paragraph tagName="p" color="dark" size="xxl">
                                Сергей Иванов
                            </Paragraph>
                            <Paragraph tagName="p" color="dark-gray" size="xs">
                                24 июля 2024
                            </Paragraph>
                        </div>
                    </div>
                    <Paragraph tagName="p" color="dark-gray" size="xs" class="description">
                        Отличная стоматологическая клиника с высококвалифицированными специалистами и современным
                        оборудованием.
                        Обслуживание на высшем уровне, лечить зубы здесь — одно удовольствие!24 июля 2024
                    </Paragraph>
                </div>
                <Rating />
            </div>

        </div>
    </Slider>
</template>
<style lang="scss">
.reviews-slider__container {
    display: flex;
    position: relative;
    left: 0;
    transition: left 0.3s ease;
    display: flex;
    gap: 10px;

    .item {
        border: 1px solid rgba(230, 232, 236, 0.3);
        border-radius: 25px;
        background: rgb(252, 252, 253);
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        width: 407px;
        touch-action: pan-y;
        transition: transform 0.3s ease;

        .item__title {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;

            .img {
                border-radius: 80px;

            }
        }

        .description {
            max-width: 347px;
            margin-bottom: 30px;
        }

        .rating {
            direction: rtl;

            .star {
                font-size: 30px;
                color: #ccc;
                cursor: pointer;
            }

            .star:hover,
            .star:hover~.star {
                color: gold;
            }
        }
    }
}
</style>