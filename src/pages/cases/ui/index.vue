<script setup lang="ts">
import { Heading } from '@/shared/ui/text/heading'
import { Links } from '@/shared/ui/link';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Button } from '@/shared/ui/button';
import { Header } from '@/widgets/header';
import { Sidebar } from '@/features/sidebar'
import { Footer } from '@/widgets/footer'
import { Container } from '@/shared/ui/container'
import { Map } from '@/widgets/section-map'
</script>
<template>
    <Header></Header>
    <Container>
        <div class="breadcumps">
            <Links tagName="router-link" to="/" size="xs">
                Главная
            </Links>
            <span>&#8250;</span>
            <Links tagName="router-link" to="/prices" size="xs">
                Услуги
            </Links>
        </div>
        <Heading tagName="h2" regular size="xxl">
            кейсы
        </Heading>
        <hr>
        <section class="section-cases">
            <Sidebar></Sidebar>
            <div class="section-cases__content">
                <div class="content__items">
                    <div class="item">
                        <img src="@/assets/images/cases/1.png" alt="">
                        <Paragraph tagName="p" size="xxl" color="dark" class="title">
                            Одномоментная, с удалением зубов, установка дентальных имплантов
                        </Paragraph>
                        <Paragraph tagName="p" size="xxl" color="dark-gray" class="description">
                            Одномоментная, с удалением зубов, имплантация в области 34, 32, 42 ,44. Через 4 месяца...
                        </Paragraph>
                        <Button tagName="button" size="xs" color="white" type="none">
                            узнать подробнее
                        </Button>
                    </div>
                    <div class="item">
                        <img src="@/assets/images/cases/2.png" alt="">
                        <Paragraph tagName="p" size="xxl" color="dark" class="title">
                            Лечение и реставрация клиновидного дефекта на нижней челюсти
                        </Paragraph>
                        <Paragraph tagName="p" size="xxl" color="dark-gray" class="description">
                            Пришла пациентка А. с жалобами на неэстетичность зубов на нижней челюсти, коричневые пятна...
                        </Paragraph>
                        <Button tagName="button" size="xs" color="white" type="none">
                            узнать подробнее
                        </Button>
                    </div>
                    <div class="item">
                        <img src="@/assets/images/cases/3.png" alt="">
                        <Paragraph tagName="p" size="xxl" color="dark" class="title">
                            Лечение кариеса у ребенка 7 лет под местной анестезией
                        </Paragraph>
                        <Paragraph tagName="p" size="xxl" color="dark-gray" class="description">
                            Ребенку 7 лет. Пришли с целью санации. Проведено лечение кариеса в кресле под местной анест...
                        </Paragraph>
                        <Button tagName="button" size="xs" color="white" type="none">
                            узнать подробнее
                        </Button>
                    </div>
                    <div class="item">
                        <img src="@/assets/images/cases/4.png" alt="">
                        <Paragraph tagName="p" size="xxl" color="dark" class="title">
                            Эстетическая реставрация зубов композитными материалами
                        </Paragraph>
                        <Paragraph tagName="p" size="xxl" color="dark-gray" class="description">
                            Эстетическая реставрация зубов композитными материалами Estelaite Sigma Quick...
                        </Paragraph>
                        <Button tagName="button" size="xs" color="white" type="none">
                            узнать подробнее
                        </Button>
                    </div>
                    <div class="item">
                        <img src="@/assets/images/cases/2.png" alt="">
                        <Paragraph tagName="p" size="xxl" color="dark" class="title">
                            Лечение и реставрация клиновидного дефекта на нижней челюсти
                        </Paragraph>
                        <Paragraph tagName="p" size="xxl" color="dark-gray" class="description">
                            Пришла пациентка А. с жалобами на неэстетичность зубов на нижней челюсти, коричневые пятна...
                        </Paragraph>
                        <Button tagName="button" size="xs" color="white" type="none">
                            узнать подробнее
                        </Button>
                    </div>
                </div>
                <div class="pagination">

                </div>
            </div>
        </section>
    </Container>
    <Map></Map>
    <Footer></Footer>
</template>
<style lang="scss" scoped>
.breadcumps {
    margin-top: 80px;
    font-size: 16px;
    line-height: 24px;
    color: #747B8F;

    a {
        color: #747B8F;
    }

    span {
        font-weight: 600;
    }
}

h2 {
    margin: 50px 0 32px;
}

hr {
    color: #B1B5C3;
}

.section-cases {
    margin-top: 100px;
    display: flex;
    gap: 80px;

    .section-cases__content {
        .content__items {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;

            .item {
                display: flex;
                flex-direction: column;
                width: 421px;

                img {
                    margin-bottom: 30px;
                    max-width: 421px;
                    max-height: 279px;
                }

                .title {
                    margin-bottom: 15px;
                }

                .description {
                    margin-bottom: 40px;
                }

                .text {
                    max-width: 420px;
                }

                .button {
                    width: 240px;
                }
            }
        }

        .pagination {
            display: flex;
        }
    }
}
</style>