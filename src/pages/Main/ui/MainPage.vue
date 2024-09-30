<script setup lang="ts">
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer'
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
import { Booking } from '@/features/booking';
import { Button } from '@/shared/ui/button';
import { Reviews } from '@/widgets/section-reviews'
import { Questions } from '@/widgets/section-questions'
import { Map } from '@/widgets/section-map'
import {BeforeAfter} from '@/widgets/section-before-after'
import {Doctors} from '@/widgets/section-doctors'
import {Implantation} from '@/widgets/section-implantation'
import {Solution} from '@/widgets/section-solution'

</script>
<template>
  <section class="section-first">
    <div class="section-first__content">
      <Header></Header>
      <Container tagName="div" size="m">
        <div class="text"></div>
        <Heading tagName="h2" regular size="xxl">
          <Circle tagName="button" color="accent" size="m">
            <Icon type="heart" color="white"></Icon>
          </Circle>
          улыбка вашей мечты со скидкой 30%
        </Heading>

        <Paragraph tagName="p" color="white" medium large size="m">
          Воспользуйтесь нашим предложением на отбеливание зубов и сияйте уверенностью каждый день!
        </Paragraph>
        <div class="section-first__button">
          <Button tagName="button" size="s" color="accent">Узнать подробнее</Button>
          <Circle tagName="button" color="accent" size="m">
            <icon type="arrow" color="white"></icon>
          </Circle>
        </div>
      </Container>
    </div>
  </section>
  <Container>
    <Booking></Booking>
  </Container>

  <section class="section-second">
    <Container tagName="div" size="m">
      <Heading tagName="h2" regular size="xl">один визит в клинику
        приблизит вас к качественному решению любой проблемы.</Heading>
      <div class="section-second__items">
        <div class="section-second__items-large">
          <router-link to="" class="section-second__item">
            <div class="service__block">
              <Heading tagName="h3" regular size="l" color="dark">лечение
                зубов</Heading>
              <Paragraph tagName="p" color="dark-gray" size="xs">восстановление формы, функции пораженного зуба и
                установка пломбы</Paragraph>
              <img src='' alt="1">
            </div>
            <div class="section-second__item_circle">
              <Circle tagName="button" color="accent" size="m">
                <icon type="arrow" color="white"></icon>
              </Circle>
            </div>
          </router-link>
          <router-link to="" class="section-second__item">
            <div class="service__block">
              <Heading tagName="h3" regular size="l">установка брекетов</Heading>
              <Paragraph tagName="p" color="dark-gray" size="xs">установка брекетов для коррекции положения зубов и
                прикуса</Paragraph>
              <img src="" alt="2">
            </div>
            <div class="section-second__item_circle">
              <Circle tagName="button" color="accent" size="m">
                <icon type="arrow" color="white"></icon>
              </Circle>
            </div>
          </router-link>
        </div>
        <div class="section-second__items-small">
          <router-link to="" class="section-second__item">
            <div class="service__block">
              <Heading tagName="h3" regular size="l">чистка
                зубов</Heading>
              <Paragraph tagName="p" color="dark-gray" size="xs">гигиена профессиональная чистка зубов и нейтрализация
                зубного камня </Paragraph>
              <img src="" alt="3">
            </div>
            <div class="section-second__item_circle">
              <Circle tagName="button" color="accent" size="m">
                <icon type="arrow" color="white"></icon>
              </Circle>
            </div>
          </router-link>
          <router-link to="" class="section-second__item">
            <div class="service__block">
              <Heading tagName="h3" regular size="l">уставновка
                виниров</Heading>
              <Paragraph tagName="p" color="dark-gray" size="xs">восстановление эстетических и функциональных свойств
                зубов </Paragraph>
              <img src="" alt="4">
            </div>
            <div class="section-second__item_circle">
              <Circle tagName="button" color="accent" size="m">
                <icon type="arrow" color="white"></icon>
              </Circle>
            </div>
          </router-link>
        </div>
        <div class="section-second__items-medium">
          <router-link to="" class="section-second__item">
            <div class="service__block">
              <Heading tagName="h3" regular size="l">хирургия</Heading>
              <Paragraph tagName="p" color="dark-gray" size="xs">передовые методы хирургического вмешательства для решения
                сложных заболеваний полости рта</Paragraph>
              <img src="" alt="5">
            </div>
            <div class="section-second__item_circle">
              <Circle tagName="button" color="accent" size="m">
                <icon type="arrow" color="white"></icon>
              </Circle>
            </div>
          </router-link>
          <router-link to="" class="section-second__item">
            <div class="service__block">
              <Heading tagName="h3" regular size="l">имплантация</Heading>
              <Paragraph tagName="p" color="dark-gray" size="xs">классическая, одноэтапная,
                базальная имплантация зубов, имплантация «All – on – 4», имплантация «All – on – 6»</Paragraph>
              <img src="" alt="6">
            </div>
            <div class="section-second__item_circle">
              <Circle tagName="button" color="accent" size="m">
                <icon type="arrow" color="white"></icon>
              </Circle>
            </div>
          </router-link>
        </div>

      </div>
    </Container>
  </section>
  <section class="section-third">
    <Container tagName="div" size="m">
      <Heading tagName="h2" regular size="xl">
        клиника<br>
        ”Дентал Клиник”
      </Heading>
      <div class="section-third__content">
        <div class="utp__items">
          <div class="utp">
            <Circle tagName="button" color="white" size="m">
              <icon type="coloredProtection" color="accent"></icon>
            </Circle>
            <Paragraph tagName="span" size="l" color="dark">2000</Paragraph>
            <Paragraph tagName="p" size="l" color="dark-gray">успешных операций в год</Paragraph>
          </div>
          <div class="utp">
            <Circle tagName="button" color="white" size="m">
              <icon type="coloredUser" color="accent"></icon>
            </Circle>
            <Paragraph tagName="span" size="l" color="dark">44</Paragraph>
            <Paragraph tagName="p" size="l" color="dark-gray">квалифицированных
              специалиста</Paragraph>
          </div>
        </div>
        <div class="section-third__video">
          <iframe src="" frameborder="0">
          </iframe>
        </div>
        <div class="utp__items">
          <div class="utp">
            <Circle tagName="button" color="white" size="m">
              <icon type="coloredHeart" color="accent"></icon>
            </Circle>
            <Paragraph tagName="span" size="l" color="dark">10 000 +</Paragraph>
            <Paragraph tagName="p" size="l" color="dark-gray">клиентов, которые
              доверят нашей клинике</Paragraph>
          </div>
          <div class="utp">
            <Circle tagName="button" color="white" size="m">
              <icon type="coloredTooth" color="accent"></icon>
            </Circle>
            <Paragraph tagName="span" size="l" color="dark">7 лет</Paragraph>
            <Paragraph tagName="p" size="l" color="dark-gray">работаем по технологии All-on-4</Paragraph>
          </div>
        </div>
      </div>
    </Container>
  </section>
  <Doctors></Doctors>
  <section class="section-about">
    <Container tagName="div" size="m">
      <div class="section-about__content">
        <div class="section-about__text">
          <Heading tagName="h2" regular size="xl">о нашей <br>
            клинике</Heading>
          <Paragraph tagName="p" color="dark-gray" size="l">У нас работают стоматологи высшей категории, доценты и
            профессора — врачи с высоким уровнем профессионализма
            и личной ответственности, способные действовать в команде и постоянно совершенствоваться. </Paragraph>
          <div class="utp">
            <Circle tagName="button" color="light-blue-second" size="m">
              <icon type="shield&tick" color="none"></icon>
            </Circle>
            <Paragraph tagName="p" color="dark-gray" size="m">cтрогие стандарты
              безопасности и высокое качество </Paragraph>
          </div>
          <div class="utp">
            <Circle tagName="button" color="light-blue-second" size="m">
              <icon type="user&heart" color="none"></icon>
            </Circle>
            <Paragraph tagName="p" color="dark-gray" size="m">гарантия на все виды стоматологических услуг</Paragraph>
          </div>
          <div class="utp">
            <Circle tagName="button" color="light-blue-second" size="m">
              <icon type="sheldue" color="none"></icon>
            </Circle>
            <Paragraph tagName="p" color="dark-gray" size="m">точность и эффективность</Paragraph>
          </div>
        </div>
        <div class="section-about__video">
          <iframe src="" frameborder="1">
          </iframe>
        </div>
      </div>
    </Container>
  </section>
  <Implantation></Implantation>
  <Solution></Solution>
  <BeforeAfter></BeforeAfter>
  <section class="section-nine">
    <Container tagName="div" size="m">
      <Heading tagName="h2" regular size="xl">ВАШЕ РЕШЕНИЕ ПРИЙТИ И ДОВЕРИТСЯ НАМ - ЭТО ШАГ К ПОЛНОЦЕННОЙ ЖИЗНИ!
      </Heading>
      <div class="section-nine__content">
        <div class="text">
          <Heading tagName="h4" size="s" regular>достижения и награды клиники</Heading>
          <ul>
            <li>
              <Circle tagName="button" size="s" color="light-blue-second">1</Circle>
              <Paragraph tagName="p" color="dark" size="s">Врачи – отличники стоматологии</Paragraph>
            </li>
            <li>
              <Circle tagName="button" size="s" color="light-blue-second">2</Circle>
              <Paragraph tagName="p" color="dark" size="s">Авторские методики, одобренные профессиональными ассоциациями
              </Paragraph>
            </li>
            <li>
              <Circle tagName="button" size="s" color="light-blue-second">3</Circle>
              <Paragraph tagName="p" color="dark" size="s">Официальный партнер Straumann и Nobel Biocare</Paragraph>
            </li>
          </ul>
          <Paragraph tagName="p" color="dark-gray" size="s" class="description">Мы вкладываемся в развитие клиники,
            непрерывное обучение специалистов у экспертов
            мирового класса, в лучшее
            оборудование и организацию сервиса по высоким европейским стандартам.
          </Paragraph>
        </div>
        <div class="images">
          <img src="@/assets/images/section-nine-background.png" alt="ico">
        </div>
      </div>
    </Container>
  </section>
  <section class="section-technology">
    <Container>
      <div class="section__tittle-with-buttons">
        <Heading tagName="h2" regular size="xl">технологии<br> в дентал клиник</Heading>
        <div class="btn__not-slide">
          <Button tagName="button" size="s" color="accent">Записаться на прием</Button>
          <Circle tagName="button" color="accent" size="s">
            <icon type="arrow" color="white"></icon>
          </Circle>
        </div>
      </div>
      <div class="section-technology__items">
        <div class="item">
          <div>
            <Circle tagName="button" size="m" color="light-blue-second">1</Circle>
          </div>
          <Paragraph tagName="p" color="dark" size="xxxl">американские протоколы</Paragraph>
          <Paragraph tagName="p" color="dark-gray" size="xs">Мы постоянно инвестируем в современные стоматологические
            технологии и оборудование, для точной диагностики и
            эффективного лечения.
          </Paragraph>
        </div>

        <div class="item">
          <div>
            <Circle tagName="button" size="m" color="light-blue-second">2</Circle>
          </div>
          <Paragraph tagName="p" color="dark" size="xxxl">полный цифровой протокол</Paragraph>
          <Paragraph tagName="p" color="dark-gray" size="xs">В нашем центре мы используем цифровой протокол, который
            применяется на всех этапах диагностики, профилактики
            и лечения.
          </Paragraph>
        </div>
        <div class="item">
          <div>
            <Circle tagName="button" size="m" color="light-blue-second">3</Circle>
          </div>
          <Paragraph tagName="p" color="dark" size="xxxl">безопасность процедур</Paragraph>
          <Paragraph tagName="p" color="dark-gray" size="xs">Мы обеспечиваем максимальный контроль качества в ходе
            многофакторной стерилизации, гарантируя 100% защиту от
            ВИЧ и гепатита.
          </Paragraph>
        </div>
      </div>
    </Container>
  </section>
  <Reviews></Reviews>
  <Questions></Questions>
  <Map></Map>
  <Footer></Footer>
</template>
<style scoped lang="scss">
.section-first {
  height: 802px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background: url("@/assets/images/section-first-background.jpg");
  background-position: center 35%;
  background-size: 120%;
  background-color: rgba(35, 38, 47, 0.6);
  overflow: hidden;

  .section-first__content {
    padding: 25px 0 0 0;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(5px);
    background: rgba(35, 38, 47, 0.6);


    .container {

      //.text {}

      h2 {
        margin: 169px 0 40px;
        max-width: 608px;
        color: #ffff;

        .circle {
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.2);
          position: relative;
          top: -10px;
        }

      }

      p {
        max-width: 571px;
      }


      .section-first__button {
        margin-top: 50px;

        .circle {
          width: 60px;
          height: 60px;
        }
      }
    }
  }
}

.section-second {
  margin-top: -70px;

  h2 {
    margin-top: 223px;
  }

  .section-second__items {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .section-second__item {
    display: flex;
    border-radius: 40px;
    background: rgb(241, 243, 249);
    padding: 40px 15px 15px 35px;
    overflow: hidden;

    &:hover {
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    }

    .circle {
      width: 65px;
      height: 65px;
    }

    .service__block {
      display: flex;
      flex-direction: column;

      .heading {
        color: #23262F;
      }

      .text {
        margin-top: 25px;
        font-size: 16px;
      }

      img {
        position: absolute;
      }

      img:nth-child(1) {
        margin-right: 10px;
        margin-top: 60px;
      }
    }

    .section-second__item_circle {
      display: flex;
      align-items: end;
    }
  }

  .section-second__items-large {
    display: flex;
    flex-direction: row;
    gap: 10px;

    .section-second__item {
      width: 385px;
      height: 610px;
    }

    .section-second__item:nth-child(2) {
      padding: 405px 15px 15px 35px;
    }
  }


  .section-second__items-medium {
    display: flex;
    flex-direction: row;
    gap: 10px;

    .section-second__item {
      width: 610px;
      height: 285px;

    }
  }

  .section-second__items-small {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .section-second__item {
      width: 430px;
      height: 295px;
    }
  }


}

.section-third {
  .section-third__content {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    .utp__items {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;
    }


    .utp {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 10px;
      background: rgb(246, 246, 246);
      border-radius: 20px;
      height: 100%;

      .circle {
        width: 50px;
        height: 50px;
      }

      p,
      span {
        margin-left: 10px;
      }

      span {
        margin-top: 40px;
        font-size: 30px;
        font-weight: 700;

      }

      p {
        max-width: 194px;
        margin-top: 15px;
        font-size: 16px;
        line-height: 24px;
      }
    }

    .section-third__video {
      background: url("@/assets/images/section-third-background.jpg");
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: 45% 20%;
      overflow: hidden;
      border-radius: 30px;
      width: 720px;
      height: 422px;

      iframe {
        overflow: hidden;
        height: 100%;
        width: 100%;
        border-radius: 20px;
        background: rgba(35, 38, 47, 0.45);
      }
    }
  }
}

.section-about {
  .section-about__content {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 200px;
    gap: 72px;

    .section-about__text {
      h2 {
        margin: 0;
      }

      p {
        max-width: 522px;
        margin: 40px 0 42px;
      }

      .utp {
        display: flex;
        align-items: center;
        gap: 14.5px;
        margin-top: 20px;

        .circle {
          width: 55px;
          height: 55px;
        }

        p {
          max-width: 366px;
          margin: 0;
        }
      }
    }

    .section-about__video {
      margin-top: 15px;
      width: 55%;
      background: url("@/assets/images/section-about-background.jpg");
      background-size: 130%;
      background-repeat: no-repeat;
      background-position: 70% 50%;
      overflow: hidden;
      border-radius: 30px;
      height: 570px;

      iframe {
        overflow: hidden;
        width: 100%;
        height: 100%;
        border-radius: 30px;
        background: rgba(35, 38, 47, 0.45);
      }
    }
  }
}

.section-nine {
  .section-nine__content {
    display: flex;
    justify-content: space-between;

    .text {
      ul {
        margin-top: 40px;

        li {
          display: flex;
          gap: 20px;
          align-items: center;
          margin-top: 20px;

          .circle {
            width: 55px;
            height: 55px;
            font-size: 18px;
            line-height: 25px;
            font-weight: 500;
          }
        }
      }

      .description {
        margin-top: 50px;
        max-width: 535px;
      }
    }

    .images {
      border-radius: 40px;
    }
  }
}

.section-technology {
  .section-technology__items {
    display: flex;
    gap: 10px;

    .item {
      border: 1px solid rgba(119, 126, 144, 0.05);
      border-radius: 40px;
      padding: 40px 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 15px;

      .circle {
        width: 60px;
        height: 60px;
        color: #4963FF;
        font-size: 24px;
        line-height: 32px;
        font-weight: 600;
        margin-bottom: 15px;
      }

      p {
        max-width: 340px;
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

section {

  h2 {
    margin: 200px 0 70px;
  }
}
</style>