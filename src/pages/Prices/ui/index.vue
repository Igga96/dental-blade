<script setup lang="ts">
import { Heading } from '@/shared/ui/text/heading'
import { Links } from '@/shared/ui/link';
import { Paragraph } from '@/shared/ui/text/paragraph';
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
      стоимость услуг
    </Heading>
    <hr>
    <section class="section-prices">
      <Sidebar></Sidebar>
      <div class="section-prices__content">
        <div class="content__items">
          <div class="item">
            <Heading tagName="h4" regular size="xs" class="title">
              Компьютерная томография
            </Heading>
            <div class="description">
              <Paragraph tagName="p" color="dark-gray" size="m">
                Компьютерная томография челюстно-лицевой области
              </Paragraph>
              <Paragraph tagName="span" color="dark-gray" size="xl">
                5 000 ₽
              </Paragraph>
            </div>
            <div class="description">
              <Paragraph tagName="p" color="dark-gray" size="m">
                Компьютерная томография для пациентов сторонних клиник
              </Paragraph>
              <Paragraph tagName="span" color="dark-gray" size="xl">
                5 000 ₽
              </Paragraph>
            </div>
          </div>
          <div class="item">
            <Heading tagName="h4" regular size="xs" class="title">
              Рентгенологическое исследование
            </Heading>
            <div class="description">
              <Paragraph tagName="p" color="dark" size="m">
                Ортопантомограмма
              </Paragraph>
              <Paragraph tagName="span" color="dark-gray" size="xl">
                5 000 ₽
              </Paragraph>
            </div>
            <div class="description">
              <Paragraph tagName="p" color="dark" size="m">
                Ортопантомография (на вынос)
              </Paragraph>
              <Paragraph tagName="span" color="dark-gray" size="xl">
                5 000 ₽
              </Paragraph>
            </div>
            <div class="description">
              <Paragraph tagName="p" color="dark" size="m">
                Рентгенограмма зуба прицельная
              </Paragraph>
              <Paragraph tagName="span" color="dark-gray" size="xl">
                5 000 ₽
              </Paragraph>
            </div>
          </div>
          <div class="item">
            <Heading tagName="h4" regular size="xs" class="title">
              Терапевтические услуги
            </Heading>
            <div class="description">
              <Paragraph tagName="p" color="dark" size="m">
                Консультация первичного пациента с определением плана и стоимости лечения
              </Paragraph>
              <Paragraph tagName="span" color="dark-gray" size="xl">
                500 ₽
              </Paragraph>
            </div>
            <div class="description">
              <Paragraph tagName="p" color="dark" size="m">
                Консультация кандидата медицинских наук с определением плана и стоимости лечения
              </Paragraph>
              <Paragraph tagName="span" color="dark-gray" size="xl">
                5 000 ₽
              </Paragraph>
            </div>
            <div class="description">
              <Paragraph tagName="p" color="dark" size="m">
                Проводниковая анестезия
              </Paragraph>
              <Paragraph tagName="span" color="dark-gray" size="xl">
                5 000 ₽
              </Paragraph>
            </div>
            <div class="description">
              <Paragraph tagName="p" color="dark" size="m">
                Инфильтрационная анестезия
              </Paragraph>
              <Paragraph tagName="span" color="dark-gray" size="xl">
                5 000 ₽
              </Paragraph>
            </div>
            <div class="description">
              <Paragraph tagName="p" color="dark" size="m">
                Удаление зубных отложений в области одного зуба с использованием ультразвука
              </Paragraph>
              <Paragraph tagName="span" color="dark-gray" size="xl">
                5 000 ₽
              </Paragraph>
            </div>
            <div class="description">
              <Paragraph tagName="p" color="dark" size="m">
                Проведение процедуры AIR-FLOW в области одного зуба
              </Paragraph>
              <Paragraph tagName="span" color="dark-gray" size="xl">
                5 000 ₽
              </Paragraph>
            </div>
          </div>
          <div class="item">
            <Heading tagName="h4" regular size="xs" class="title">
              Ортопедия
            </Heading>
            <div class="description">
              <Paragraph tagName="p" color="dark" size="m">
                Вкладка культевая КХС
              </Paragraph>
              <Paragraph tagName="span" color="dark-gray" size="xl">
                28 000 ₽
              </Paragraph>
            </div>
            <div class="description">
              <Paragraph tagName="p" color="dark" size="m">
                Коронка металлокерамическая из импортного материала
              </Paragraph>
              <Paragraph tagName="span" color="dark-gray" size="xl">
                5 000 ₽
              </Paragraph>
            </div>
            <div class="description">
              <Paragraph tagName="p" color="dark" size="m">
                Коронка безметалловая Emax
              </Paragraph>
              <Paragraph tagName="span" color="dark-gray" size="xl">
                28 000 ₽
              </Paragraph>
            </div>
            <div class="description">
              <Paragraph tagName="p" color="dark" size="m">
                Иммедиат-протез полный
              </Paragraph>
              <Paragraph tagName="span" color="dark-gray" size="xl">
                5 000 ₽
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
  <Map></Map>
  <Footer></Footer>
</template>
  
  
<style scoped lang="scss">
h2 {
  margin: 50px 0 32px;
}

hr {
  color: #B1B5C3;
}

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

.section-prices {
  margin-top: 100px;
  display: flex;
  gap: 80px;

  .section-prices__content {
    .content__items {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 60px;

      .item {
        .title {
          margin-bottom: 40px;
        }

        .description {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
        }

      }
    }
  }
}
</style>