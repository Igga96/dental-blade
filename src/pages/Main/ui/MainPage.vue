<script setup lang="ts">
import { Header } from '@/widgets/header';
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
import { Booking } from '@/features/booking';



</script>
<template>
  <Container tagName="div" size="m"></Container>
  <section class="section-first">
    <Header></Header>
    <Container tagName="div" size="m">
      <Heading tagName="h2" regular size="xxl">
        <Circle tagName="button" color="accent" size="xl">
          <Icon type="heart" color="white"></Icon>
        </Circle>улыбка
        вашей мечты со скидкой 30%
      </Heading>
      <Paragraph tagName="p" medium large size="m">
        Воспользуйтесь нашим предложением на отбеливание зубов и сияйте уверенностью каждый день!
      </Paragraph>
      <div>
        <button>Узнать подробнее</button>
        <Circle tagName="button" color="accent" size="m">
          <icon type="arrow" color="white"></icon>
        </Circle>
      </div>
    </Container>
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
              <Heading tagName="h3" regular size="l">лечение
                зубов</Heading>
              <p>восстановление формы, функции пораженного зуба и установка пломбы</p>
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
              <p>установка брекетов для коррекции положения зубов и прикуса</p>
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
              <p>гигиена профессиональная чистка зубов и нейтрализация зубного камня </p>
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
              <p>восстановление эстетических и функциональных свойств зубов </p>
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
              <p>передовые методы хирургического вмешательства для решения сложных заболеваний полости рта</p>
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
              <p>классическая, одноэтапная,
                базальная имплантация зубов, имплантация «All – on – 4», имплантация «All – on – 6»</p>
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
            <span>2000</span>
            <p>успешных операций в год</p>
          </div>
          <div class="utp">
            <Circle tagName="button" color="white" size="m">
              <icon type="coloredUser" color="accent"></icon>
            </Circle>
            <span>44</span>
            <p>квалифицированных
              специалиста</p>
          </div>
        </div>
        <iframe src="#" frameborder="0">
        </iframe>
        <div class="utp__items">
          <div class="utp">
            <Circle tagName="button" color="white" size="m">
              <icon type="coloredHeart" color="accent"></icon>
            </Circle>
            <span>10 000 +</span>
            <p>клиентов, которые
              доверят нашей клинике</p>
          </div>
          <div class="utp">
            <Circle tagName="button" color="white" size="m">
              <icon type="coloredTooth" color="accent"></icon>
            </Circle>
            <span>7 лет</span>
            <p>работаем по технологии All-on-4</p>
          </div>
        </div>
      </div>
    </Container>
  </section>
  <section class="section-doctors">
    <Container>
      <div class="section__tittle-with-buttons">
        <Heading tagName="h2" regular size="xl">Наши врачи</Heading>
        <div class="btn__slide">
          <button>prev</button>
          <button>next</button>
        </div>
      </div>
      <div class="doctors-slider">
        <div class="doctors-slider__content">
          <a class="item">
            <div class="item__info">
              <Heading tagName="h4" size="xs" regular>Фроленков Александр Сергеевич</Heading>
              <p>cтоматолог-терапевт, эндодонтист, врач высшей квалификационной категории</p>
              <p>
                <span> высшая категория</span>
                <span>стаж 20 лет</span>
              </p>
            </div>
          </a>
          <a class="item">
            <div class="item__info">
              <Heading tagName="h4" size="xs" regular>Фроленков Александр Сергеевич</Heading>
              <p>cтоматолог-терапевт, эндодонтист, врач высшей квалификационной категории</p>
              <p>
                <span> высшая категория</span>
                <span>стаж 20 лет</span>
              </p>
            </div>
          </a>
          <a class="item">
            <div class="item__info">
              <Heading tagName="h4" size="xs" regular>Фроленков Александр Сергеевич</Heading>
              <p>cтоматолог-терапевт, эндодонтист, врач высшей квалификационной категории</p>
              <p>
                <span> высшая категория</span>
                <span>стаж 20 лет</span>
              </p>
            </div>
          </a>
          <a class="item">
            <div class="item__info">
              <Heading tagName="h4" size="xs" regular>Фроленков Александр Сергеевич</Heading>
              <p>cтоматолог-терапевт, эндодонтист, врач высшей квалификационной категории</p>
              <p>
                <span> высшая категория</span>
                <span>стаж 20 лет</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </Container>
  </section>
  <section class="section-about">
    <Container tagName="div" size="m">
      <div class="section-about__content">
        <div class="section-about__text">
          <Heading tagName="h2" regular size="xl">о нашей
            клинике</Heading>
          <p>У нас работают стоматологи высшей категории, доценты и профессора — врачи с высоким уровнем профессионализма
            и личной ответственности, способные действовать в команде и постоянно совершенствоваться. </p>
          <div class="utp">
            <Circle tagName="button" color="accent" size="m">
              <icon type="shield&tick" color="dark"></icon>
            </Circle>
            <p>cтрогие стандарты
              безопасности и высокое качество </p>
          </div>
          <div class="utp">
            <Circle tagName="button" color="accent" size="m">
              <icon type="user&heart" color="dark"></icon>
            </Circle>
            <p>гарантия на все виды стоматологических услуг</p>
          </div>
          <div class="utp">
            <Circle tagName="button" color="accent" size="m">
              <icon type="sheldue" color="dark"></icon>
            </Circle>
            <p>точность и эффективность</p>
          </div>
        </div>
        <div class="section-about__video">
          <iframe src="#" frameborder="0">
          </iframe>
        </div>
      </div>
    </Container>
  </section>
  <section class="section-implantation">
    <Container tagName="div" size="m">
      <Heading tagName="h2" regular size="xl">у нас имплантация
        доступна каждому без мнимой экономии!</Heading>
      <div class="section-six__items">
        <div class="item">
          <p>при 100% оплате скидка</p>
          <ul>
            <li>от 6 мес</li>
            <li>от 300 руб в день</li>
            <li> оформление на месте</li>
          </ul>
          <button>узнать подробнее</button>
        </div>
        <div class="item">
          <p>при 100% оплате скидка</p>
          <ul>
            <li>от 6 мес</li>
            <li>от 300 руб в день</li>
            <li> оформление на месте</li>
          </ul>
          <button>узнать подробнее</button>
        </div>
      </div>
    </Container>
  </section>
  <section class="section-seven">
    <Container tagName="div" size="m">
      <Heading tagName="h2" regular size="xl">вне зависимости от состояния здоровья ваша проблема с зубами будет решена!
      </Heading>
      <ul>
        <li>Полное отсутствие зубов</li>
        <li>зубы подвижны или выпадают</li>
        <li>наличие воспаления</li>
        <li>атрофия костной ткани</li>
        <li>зубы подлежат удалению</li>
        <li>острый пародонтит</li>
      </ul>
      <div class="section-seven__content">
        <div class="item">
          <div>
            <div class="text">
              <Heading tagName="h4" regular size="m">протезирование, лечение и имплантация зубов</Heading>
              <p><span>врач:</span> Фроленков Александр Сергеевич</p>
              <p><span>Вводная часть:</span>к специалистам нашей клиники обратилась 39-летняя пациентка Ю. с просьбой в
                кратчайшие сроки сделать идеально белую голливудскую улыбку.</p>
              <p><span>Что сделали:</span> установка зубных имплантатов Astra Tech в местах, где отсутствовали зубы;
                эндодонтическое лечение (подготовка под протезирование); отбеливание зубов системой Zoom 4;</p>
            </div>
            <div class="photo">
              <img src="" alt="">
              <div>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
          <div>
            <p>стоимость:</p>
            <p>250 000 rub</p>
          </div>
        </div>
      </div>
    </Container>
  </section>
  <section class="section-eight">
    <Container>
      <div>
        <Heading tagName="h2" regular size="xl">результаты до / после</Heading>
        <div>
          <button>prev</button>
          <button>next</button>
        </div>
      </div>
    </Container>
    <div class="slider">
      <div><img src="" alt="1"></div>
      <div><img src="" alt="2"></div>
      <div><img src="" alt="3"></div>
      <div><img src="" alt="4"></div>
      <div><img src="" alt="5"></div>
    </div>
  </section>
  <section class="section-nine">
    <Container tagName="div" size="m">
      <Heading tagName="h2" regular size="xl">ВАШЕ РЕШЕНИЕ ПРИЙТИ ИДОВЕРИТСЯ НАМ - ЭТО ШАГ К ПОЛНОЦЕННОЙ ЖИЗНИ!
      </Heading>
      <div class="section-nine__content">
        <div>
          <p>достижения и награды клиники</p>
          <ul>
            <li><img src="" alt="">
              <p>Врачи – отличники стоматологии</p>
            </li>
            <li><img src="" alt="">
              <p>Авторские методики, одобренные профессиональными ассоциациями</p>
            </li>
            <li><img src="" alt="">
              <p>Официальный партнер Straumann и Nobel Biocare</p>
            </li>
          </ul>
          <p>Мы вкладываемся в развитие клиники, непрерывное обучение специалистов у экспертов мирового класса, в лучшее
            оборудование и организацию сервиса по высоким европейским стандартам.</p>
        </div>
        <div>
          <img src="" alt="ico">
        </div>
      </div>
    </Container>
  </section>
  <section class="section-technology">
    <Container tagName="div" size="m">
      <div>
        <Heading tagName="h2" regular size="xl">технологии в дентал клиник</Heading>
        <button>Записаться на прием</button>
      </div>
      <div>
        <div>
          <span>01</span>
        </div>
        <p>американские протоколы</p>
        <p>Мы постоянно инвестируем в современные стоматологические технологии и оборудование, для точной диагностики и
          эффективного лечения.</p>
      </div>
      <div>
        <div>
          <span>02</span>
        </div>
        <p>полный цифровой протокол</p>
        <p>В нашем центре мы используем цифровой протокол, который применяется на всех этапах диагностики, профилактики
          и лечения.</p>
      </div>
      <div>
        <div>
          <span>03</span>
        </div>
        <p>безопасностьпроцедур</p>
        <p>Мы обеспечиваем максимальный контроль качества в ходе многофакторной стерилизации, гарантируя 100% защиту от
          ВИЧ и гепатита.</p>
      </div>
    </Container>
  </section>
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
    </div>
  </section>
  <section class="section__questions">
    <Container tagName="div" size="m">
      <Heading tagName="h2" regular size="xl">у нас часто спрашивают?</Heading>
      <ul>
        <li>
          <p><img src="" alt="1">Какие методы обезболивания используются в вашей клинике?</p>
          <p>///</p>
        </li>
        <li>
          <p><img src="" alt="2">Предоставляете ли вы услуги детской стоматологии?</p>
          <p>Да, в нашей клинике есть специалисты по детской стоматологии, которые занимаются лечением и профилактикой
            зубных заболеваний у детей. Мы создаем комфортные условия, чтобы маленькие пациенты не боялись посещать
            стоматолога.</p>
        </li>
        <li>
          <p><img src="" alt="3">Как записаться на прием в вашу клинику?</p>
          <p>///</p>
        </li>
        <li>
          <p><img src="" alt="4">Какие виды протезирования зубов вы предлагаете?</p>
          <p>///</p>
        </li>
        <li>
          <p><img src="" alt="5">Какие виды протезирования зубов вы предлагаете?</p>
          <p>///</p>
        </li>
      </ul>
    </Container>
  </section>
  <section class="section__map">
    <div class="blur">
      <img src="" alt="ico">
      <p>Москва,
        Кутузовский пр-кт, 45</p>
      <p>
        <span>телефон:</span>
        <span>+7 (495) 988-99-30</span>
      </p>
      <p>
        <span>время работы:</span>
        <span>10:00–22.00.</span>
      </p>
      <p>
        <span>email:</span>
        <span>insmileveneers@gmail.com</span>
      </p>
      <button>записаться на прием</button>
    </div>
  </section>
  <footer>
    <Container tagName="div" size="s">
      <div class="footer__content-left">
        <Logo class="header__logo" />
        <div>
          <p>Денталмед© 2024, </p>
          <p>Все права защищены, копирование материалов запрещено</p>
        </div>
      </div>
      <div class="footer__content-right">
        <div>
          <a href="">Политика конфеденциальности</a>
          <a href="">Публичная оферта</a>
        </div>
        <div>
          <a href="">Лицензия</a>
          <a href="">Нормативная база</a>
        </div>
        <ul>
          <li><a href="">WS</a></li>
          <li><a href="">TG</a></li>
          <li><a href="">VK</a></li>
          <li><a href="">FB</a></li>
        </ul>
      </div>
    </Container>
  </footer>
</template>
<style scoped lang="scss">
section {
  border: 1px solid black;
}

.section-first {
  height: 802px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;

  .container {

    h2 {
      margin: 169px 0 40px;
      max-width: 608px;
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

    .service__block {
      display: flex;
      flex-direction: column;

      p {
        margin-top: 25px;
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
      width: 600px;
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
      gap: 10px
    }


    .utp {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 10px;
      background: rgb(246, 246, 246);
      border-radius: 20px;

      p,
      span {
        margin-left: 10px;
      }

      span {
        margin-top: 40px;
      }

      p {
        margin-top: 15px;
      }
    }

    iframe {
      border-radius: 20px;
      background: rgba(35, 38, 47, 0.45), url();
      width: 100%;
    }
  }
}

.section-doctors {
  .doctors-slider {
    width: 100%;
    overflow: hidden;
  }

  .doctors-slider__content {
    display: flex;
    gap: 10px;

    .item {
      background: url('@/assets/images/doctors/1.png');
      background-position: center;
      width: 385px;
      height: 541px;
      border-radius: 30px;
    }

    .item {
      .item__info {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        padding: 30px;

        p {
          margin-top: 15px;
        }

        p,
        h4 {
          display: none;
        }

        &:hover {
          background: linear-gradient(180.00deg, rgba(0, 0, 0, 0) 23.58%, rgb(28, 30, 39) 123.224%);


          p,
          h4 {
            display: block;
          }
        }

        span {
          margin-top: 20px;
          padding: 6px 20px;
          border-radius: 90px;
          backdrop-filter: blur(14px);
          background: rgba(255, 255, 255, 0.1);
        }
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

        p {
          max-width: 366px;
          margin: 0;
        }
      }
    }

    .section-about__video {
      width: 50%;

      iframe {
        width: 100%;
        height: 570px;
        border-radius: 30px;
        background: rgba(35, 38, 47, 0.45), url();
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
}




section {

  h2 {
    margin: 200px 0 70px;
  }
}
</style>