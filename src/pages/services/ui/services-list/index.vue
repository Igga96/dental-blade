<script setup lang="ts">
import { Header } from '@/widgets/header';
import { Heading } from '@/shared/ui/text/heading';
import { Container } from '@/shared/ui/container';
import { Breadcrumbs } from '@/features/breadcrumbs';
import { ServicesList } from '@/features/services-list'
import { reactive } from 'vue';

const servicesListItems = reactive([
    { id: 0, slug: 'protezirovanie-zubov', name: 'Протезирование зубов' },
    { id: 1, slug: 'implantatsiya', name: 'Имплантация' },
    { id: 2, slug: 'kompleksnaya-implantatsiya', name: 'Комплексная имплантация' },
    { id: 3, slug: 'lechenie-zubov', name: 'Лечение зубов' },
    { id: 4, slug: 'parodontologiya', name: 'Пародонтология' },
    { id: 5, slug: 'hirurgicheskaya-stomatologiya', name: 'Хирургическая стоматология' },
    { id: 6, slug: 'detskaya-stomatologiya', name: 'Детская стоматология' },
    { id: 7, slug: 'ustanovka-vinirov', name: 'Установка виниров' },
    { id: 8, slug: 'otbelivaniye-zubov', name: 'Отбеливание зубов' },
    { id: 9, slug: 'ortodontiya', name: 'Ортодонтия' },
    { id: 10, slug: 'zubotehnicheskaya-laboratoriya', name: 'Зуботехническая лаборатория' },
    { id: 11, slug: 'chistka-zubov', name: 'Чистка зубов' },
    { id: 12, slug: 'ustanovka-breketov', name: 'Установка брекетов' },
])

</script>
<template>
    <Header />
    <Container>
        <Breadcrumbs />
        <Heading tagName="h2" regular size="xxl">
            услуги
        </Heading>
        <hr />
        <section class="services-list">
            <ServicesList :servicesListItems="servicesListItems" />
        </section>
    </Container>
</template>
<style lang="scss" scoped>
h2 {
    margin-top: 50px;
}

hr {
    margin: 30px 0;
    border: none;
    border-top: 1px solid #F1F2F4;
}

.services-list {
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;

}

@media screen and (max-width:1281px) {
    .services-list {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media screen and (max-width:769px) {
    h2 {
        margin-top: 30px;
    }

    .services-list {
        margin-top: 30px;
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (max-width:541px) {
    .services-list {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>