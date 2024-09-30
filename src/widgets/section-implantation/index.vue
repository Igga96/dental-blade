<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
</script>

<template>
    <section class="section-implantation">
        <Container tagName="div" size="m">
            <Heading tagName="h2" regular size="xl">у нас имплантация
                доступна каждому без мнимой экономии!</Heading>
        </Container>
        <div class="section-implantation__items">
            <div class="item">
                <img src="@/assets/images/implantation_1.png" alt="">
            </div>
            <div class="item">
                <img src="@/assets/images/implantation_2.png" alt="">
            </div>
            <div class="item">
                <img src="@/assets/images/implantation_1.png" alt="">
            </div>
        </div>
    </section>
</template>
<style lang="scss">
.section-implantation {
    h2 {
        margin: 200px 0 70px;
    }

    .section-implantation__items {
        padding-left: 110px;
        display: flex;
        gap: 10px;
        overflow: hidden;
        position: relative;
    }
}
</style>