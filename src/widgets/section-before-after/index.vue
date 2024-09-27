<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icons';
import { BeforeAfterSlider } from '@/features/slider/ui/before-after-slider'

</script>
<template>
    <section class="section-before-after">
        <Container>
            <div class="section__tittle-with-buttons">
                <Heading tagName="h2" regular size="xl">результаты до / после</Heading>
                <div class="btn__slide">
                    <Button tagName="button" size="s" color="white" type="circle">
                        <Icon type="arrowLeft" color="none"></Icon>
                    </Button>
                    <Button tagName="button" size="s" color="white" type="circle">
                        <Icon type="arrowRight" color="none"></Icon>
                    </Button>
                </div>
            </div>
        </Container>
        <BeforeAfterSlider />
    </section>
</template>
<style lang="scss">
.section-before-after {
    overflow: hidden;
    h2 {
        margin: 200px 0 70px;
    }

}

@media screen and (max-width: 768px) {
    .section-before-after {
        h2 {
            margin: 100px 0 40px;
        }

        .section__tittle-with-buttons {
            .btn__slide {
                display: none;
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