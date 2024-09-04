<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
import { Button } from '@/shared/ui/button';
</script>
<template>
    <section class="section-before-after">
        <Container>
            <div class="section__tittle-with-buttons">
                <Heading tagName="h2" regular size="xl">результаты до / после</Heading>
                <div class="btn__slide">
                    <button>prev</button>
                    <button>next</button>
                </div>
            </div>
        </Container>
        <div class="before-after__slider">
            <div class="slider__content">
                <div class="slider__item">
                    <img src="@/assets/images/before_after/smile_1.png" alt="1">
                </div>
                <div class="slider__item">
                    <img src="@/assets/images/before_after/smile_2.png" alt="2">
                </div>
                <div class="slider__item">
                    <img src="@/assets/images/before_after/smile_3.png" alt="3">
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
.section-before-after {
    h2 {
        margin: 200px 0 70px;
    }

    .before-after__slider {
        .slider__content {
            display: flex;
            justify-content: center;
            overflow: hidden;
            gap: 30px;
            max-width: 100%;

            .slider__item {
                border-radius: 20px;
                display: flex;
                width: 100%;

                img {
                    border-radius: 20px;
                    max-height: 400px;
                    position: relative;
                }
            }
        }
    }
}

.section__tittle-with-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .btn__slide {
        display: flex;
        align-items: end;
        margin-bottom: 70px;
        gap: 10px;

        button {
            width: 50px;
            height: 50px;
            background-color: white;
            border: 1px solid rgb(177, 181, 195);
            border-radius: 30px;
        }
    }

    .btn__not-slide {
        display: flex;
        align-items: end;
        margin-bottom: 70px;

        .button {
            white-space: nowrap;
        }

        .circle {
            width: 60px;
            height: 60px;
        }
    }

}
</style>