<script setup lang="ts">
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer'
import { Container } from '@/shared/ui/container'
import { Heading } from '@/shared/ui/text/heading'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
import { Button } from '@/shared/ui/button';
import { Reviews } from '@/widgets/section-reviews'
import { Questions } from '@/widgets/section-questions'
import { Map } from '@/widgets/map'
import { BeforeAfter } from '@/widgets/section-before-after'
import { DoctorsSlider } from '@/widgets/doctors-slider'
import { Implantation } from '@/widgets/implantation'
import { Solution } from '@/widgets/section-solution'


</script>
<template>
  <section class="section-first">
    <Header/>
    <Container>
      <div class="section-first__content">
        <div class="content__left">
          <Heading tagName="h2" regular size="xxl">
            верните зубы за один день, без боли
          </Heading>
          <Paragraph tagName="p" color="dark-gray" size="xl">
            Живите и жуйте полноценно сразу. Всего 2-3 дня - вы даже не вспомните, что у вас не свои зубы
          </Paragraph>
          <div class="buttons">
            <Button tagName="button" size="s" color="accent" type="none">
              Узнать подробнее
            </Button>
            <Button tagName="button" color="accent" size="s" type="circle">
              <icon type="play" color="white"></icon>
            </Button>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              смотреть видео отзыв
            </Paragraph>
          </div>
        </div>
        <div class="content__right">
          <div class="utp">
            <Circle tagName="span" color="accent" size="s">
              <icon type="whiteProtection" color="white"></icon>
            </Circle>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              пожизненная гарантия
            </Paragraph>
          </div>
          <div class="photo">
            <img src="@/assets/images/mask_group.png" alt="">
          </div>
          <div class="badge-right">
            <Circle tagName="span" color="opacity-light" size="s">
              <icon type="coloredTooth" color="accent"></icon>
            </Circle>
          </div>
        </div>
      </div>
    </Container>
  </section>
  <section class="section-second">
    <Container>
      <div class="section-second__content">
        <div class="item">
          <Circle tagName="span" color="white" size="m">
            <Icon type="heart" color="dark"></Icon>
          </Circle>
          <Paragraph tagName="p" color="dark" size="xs">
            доступный способ востановления всей челюсти
          </Paragraph>
        </div>
        <div class="item">
          <Circle tagName="span" color="white" size="m">
            <Icon type="heart" color="dark"></Icon>
          </Circle>
          <Paragraph tagName="p" color="dark" size="xs">
            новые зубы фиксируются сразу после установки
          </Paragraph>
        </div>
        <div class="item">
          <Circle tagName="span" color="white" size="m">
            <Icon type="heart" color="dark"></Icon>
          </Circle>
          <Paragraph tagName="p" color="dark" size="xs">
            не требуется сложная пластика тканей
          </Paragraph>
        </div>
        <div class="item">
          <Circle tagName="span" color="white" size="m">
            <Icon type="heart" color="dark"></Icon>
          </Circle>
          <Paragraph tagName="p" color="dark" size="xs">
            просто обслуживать и ухаживать за протезом
          </Paragraph>
        </div>
        <div class="item">
          <Circle tagName="span" color="white" size="m">
            <Icon type="heart" color="dark"></Icon>
          </Circle>
          <Paragraph tagName="p" color="dark" size="xs">
            обеспечивают полноценную жевательную функцию
          </Paragraph>
        </div>
        <div class="item">
          <Circle tagName="span" color="white" size="m">
            <Icon type="heart" color="dark"></Icon>
          </Circle>
          <Paragraph tagName="p" color="dark" size="xs">
            выглядят и функционируют как естественные зубы
          </Paragraph>
        </div>

      </div>
    </Container>
  </section>
  <section class="section-test">
    <Container>
      <Heading tagName="h2" regular size="xl">
        Стандарт нашей работы никакой боли во время и после операции
      </Heading>
      <Paragraph tagName="p" color="dark-gray" size="l">
        All-on-4® - методика имплантации зубов с использованием всего 4 имплантатов для восстановления полной или
        частичной зубной дуги. Это инновационное решение позволяет быстро и эффективно восстановить утраченные зубы, даже
        при значительной потере костной ткани.
      </Paragraph>
      <div class="section-test__content">
        <div class="content__test">
          <div class="title">
            <Paragraph tagName="p" color="dark-gray" size="l">
              пройдите тест
            </Paragraph>
            <Paragraph tagName="p" color="dark-gray" size="l">
              вопрос 1/4
            </Paragraph>
          </div>
          <div class="progress-bar">
            <div class="progress-fill">
            </div>
          </div>
          <div class="test">
            <Paragraph tagName="p" color="dark" size="l" class="title">
              вам нужна имплантация?
            </Paragraph>
            <div class="test__items">
              <div class="item active">
                <div class="img">
                  <img src="@/assets/images/services_page/test/upper_jaw.png" alt="">
                  <Circle tagName="span" color="accent" size="s">
                    <Icon type="tick" color="none"></Icon>
                  </Circle>
                </div>
                <Paragraph tagName="p" color="dark" size="l">
                  верхней челюсти
                </Paragraph>
              </div>
              <div class="item">
                <div class="img">
                  <img src="@/assets/images/services_page/test/lower_jaw.png" alt="">
                  <Circle tagName="span" color="accent" size="s">
                    <Icon type="tick" color="none"></Icon>
                  </Circle>
                </div>
                <Paragraph tagName="p" color="dark" size="l">
                  нижней челюсти
                </Paragraph>
              </div>
              <div class="item">
                <div class="img">
                  <img src="@/assets/images/services_page/test/both_jaws.png" alt="">
                  <Circle tagName="span" color="accent" size="s">
                    <Icon type="tick" color="none"></Icon>
                  </Circle>
                </div>
                <Paragraph tagName="p" color="dark" size="l">
                  обеих челюстей
                </Paragraph>
              </div>
            </div>
          </div>
          <div class="buttons">
            <Paragraph tagName="p" color="dark-gray" size="xs">
              выберите вариант ответа и нажмите кнопку “Далее”
            </Paragraph>
            <Button tagName="button" size="xs" color="accent" type="none">
              далее
            </Button>
          </div>
        </div>
        <div class="content__photo">
          <div class="gradient">
            <Paragraph tagName="p" color="white" size="m">
              по результатам ваших ответов мы сможем более точно сориентировать вас по цене
            </Paragraph>
          </div>
        </div>
      </div>
    </Container>

  </section>
  <section class="section-standarts">
    <Container>
      <Heading tagName="h2" regular size="xl">
        Стандарт нашей работы никакой боли во время и после операции
      </Heading>
      <div class="section-standarts__content">
        <div class="content__items">
          <div class="item">
            <Circle tagName="span" color="white" size="m">
              <Icon type="coloredProtection" color="accent"></Icon>
            </Circle>
            <Paragraph tagName="p" color="dark" size="xxl" class="title">
              безболезненные уколы
            </Paragraph>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              инновационные капсульные шприцы обладают тонкими и острыми иглами, что минимизирует дискомфорт при введении
              уколов.
            </Paragraph>
          </div>
          <div class="item">
            <Circle tagName="span" color="white" size="m">
              <Icon type="coloredProtection" color="accent"></Icon>
            </Circle>
            <Paragraph tagName="p" color="dark" size="xxl" class="title">
              быстрое восстановление
            </Paragraph>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              мягкая седация позволяет пациентам чувствовать себя расслабленно и спокойно, уменьшая тревожность и стресс.
            </Paragraph>
          </div>
          <div class="item">
            <Circle tagName="span" color="white" size="m">
              <Icon type="coloredProtection" color="accent"></Icon>
            </Circle>
            <Paragraph tagName="p" color="dark" size="xxl" class="title">
              легкие обезболивающие
            </Paragraph>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              современные обезболивающие препараты не вызывают побочных эффектов, таких как сонливость или расстройства
              желудка.
            </Paragraph>
          </div>
          <div class="item">
            <Circle tagName="span" color="white" size="m">
              <Icon type="coloredProtection" color="accent"></Icon>
            </Circle>
            <Paragraph tagName="p" color="dark" size="xxl" class="title">
              думаем о вашем комфорте
            </Paragraph>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              использование передовых технологий позволяет нам проводить диагностику и лечение на самом высоком уровне.
            </Paragraph>
          </div>
        </div>
        <div class="content__photo">
          <Circle tagName="span" color="accent" size="l">
            <Icon type="heart" color="white"></Icon>
          </Circle>
        </div>
      </div>
    </Container>
  </section>
  <section class="section-all-on-first">
    <Container>
      <Heading tagName="h2" regular size="xl">
        Имплантация без боли: All-on-4® при любой степени потери зубов
      </Heading>
    </Container>
    <div class="section-all-on-first__content">
      <div class="content__items">
        <div class="item">
          <div class="title">
            <Paragraph tagName="p" color="dark" size="xxl">
              нет всех<br> зубов
            </Paragraph>
            <Circle tagName="span" color="accent" size="s">
              <Icon type="heart" color="white"></Icon>
            </Circle>
          </div>
          <Paragraph tagName="p" color="dark-gray" size="xs">
            Замена съемного протеза на конструкцию без нёба с фиксацией на имплантатах улучшает качество жизни на два
            порядка: ощущается как свои собственные зубы, возвращает полные вкусовые ощущения, не нарушает дикцию.
          </Paragraph>
        </div>
        <div class="item">
          <div class="title">
            <Paragraph tagName="p" color="dark" size="xxl">
              дефицит <br>костной ткани
            </Paragraph>
            <Circle tagName="span" color="accent" size="s">
              <Icon type="heart" color="white"></Icon>
            </Circle>
          </div>
          <Paragraph tagName="p" color="dark-gray" size="xs">
            Атрофия кости требует проведения надежных, результативных и долговечных, но затратных и отдаляющих
            протезирование.
          </Paragraph>
        </div>
        <div class="item">
          <div class="title">
            <Paragraph tagName="p" color="dark" size="xxl">
              почти не <br>
              осталось зубов
            </Paragraph>
            <Circle tagName="span" color="accent" size="s">
              <Icon type="heart" color="white"></Icon>
            </Circle>
          </div>
          <Paragraph tagName="p" color="dark-gray" size="xs">
            All-on-4® при частичном отсутствии зубов проводится с одновременным удалением всех несостоятельных безнадежных
            зубов.
          </Paragraph>
        </div>
        <div class="item">
          <div class="title">
            <Paragraph tagName="p" color="dark" size="xxl">
              нет всех<br> зубов
            </Paragraph>
            <Circle tagName="span" color="accent" size="s">
              <Icon type="heart" color="white"></Icon>
            </Circle>
          </div>
          <Paragraph tagName="p" color="dark-gray" size="xs">
            Замена съемного протеза на конструкцию без нёба с фиксацией на имплантатах улучшает качество жизни на два
            порядка: ощущается как свои собственные зубы, возвращает полные вкусовые ощущения, не нарушает дикцию.
          </Paragraph>
        </div>
        <div class="item">
          <div class="title">
            <Paragraph tagName="p" color="dark" size="xxl">
              дефицит <br>костной ткани
            </Paragraph>
            <Circle tagName="span" color="accent" size="s">
              <Icon type="heart" color="white"></Icon>
            </Circle>
          </div>
          <Paragraph tagName="p" color="dark-gray" size="xs">
            Атрофия кости требует проведения надежных, результативных и долговечных, но затратных и отдаляющих
            протезирование.
          </Paragraph>
        </div>
      </div>
    </div>
  </section>
  <section class="section-all-on-second">
    <Container>
      <Heading tagName="h2" regular size="xl">
        имплантация All-on-4:<br>
        как это происходит и что включает в себя.
      </Heading>
      <div class="section-all-on-second__content">
        <div class="content__video">
          <iframe src="" frameborder="1">
          </iframe>
        </div>
        <div class="content__cards">
          <div class="item">
            <Circle tagName="span" color="white" size="s">
              <Paragraph tagName="span" color="accent" size="xxl">01</Paragraph>
            </Circle>
            <div class="item__text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                подготовительный этап
              </Paragraph>
              <Paragraph tagName="p" color="dark-gray" size="xs">
                на консультации врач обсуждает план лечения и осматривает полость рта. Проводится диагностика с
                компьютерной
                томографией челюстей и анализами. Создается виртуальная модель будущей улыбки пациента для оптимального
                результата
              </Paragraph>
            </div>
          </div>
          <div class="item">
            <Circle tagName="span" color="white" size="s">
              <Paragraph tagName="span" color="accent" size="xxl">02</Paragraph>
            </Circle>
            <div class="item__text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                xирургический этап
              </Paragraph>
              <Paragraph tagName="p" color="dark-gray" size="xs">
                при подготовке к имплантации зубов проводится санация полости рта. Затем устанавливается имплантат в
                челюсть с высокой точностью. Для естественного вида десны вокруг имплантата ставится формирователь десны.
              </Paragraph>
            </div>
          </div>
          <div class="item">
            <Circle tagName="span" color="white" size="s">
              <Paragraph tagName="span" color="accent" size="xxl">03</Paragraph>
            </Circle>
            <div class="item__text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                производственный этап
              </Paragraph>
              <Paragraph tagName="p" color="dark-gray" size="xs">
                для изготовления индивидуальных коронок стоматолог-ортопед снимает слепки зубов и отправляет их в
                зуботехническую лабораторию для производства временных и постоянных коронок, учитывая выбранный пациентом
                материал, цвет и форму.
              </Paragraph>
            </div>
          </div>
          <div class="item">
            <Circle tagName="span" color="white" size="s">
              <Paragraph tagName="span" color="accent" size="xxl">04</Paragraph>
            </Circle>
            <div class="item__text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                ортопедический этап
              </Paragraph>
              <Paragraph tagName="p" color="dark-gray" size="xs">
                временные коронки устанавливаются для сохранения эстетики и функциональности перед изготовлением
                постоянных. После примерки коронок на подгонку и цвет устанавливают постоянные коронки, завершая процедуру
                имплантации.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
  <BeforeAfter></BeforeAfter>
  <section class="section-safety">
    <Container>
      <Heading tagName="h2" regular size="xl">
        высокие стандарты безопасности и качества
      </Heading>
    </Container>
    <div class="section-safety__content">
      <div class="content__cards">
        <div class="item">
          <Circle tagName="span" color="white" size="s">
            <Icon type="heart" color="dark"></Icon>
          </Circle>
          <div class="item__text">
            <Paragraph tagName="p" color="dark" size="xxl" class="title">
              гарантия качества материалов
            </Paragraph>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              использование только высококачественных имплантатов и материалов для коронок с сертификацией качества на всю
              материалы
            </Paragraph>
          </div>
        </div>
        <div class="item">
          <Circle tagName="span" color="white" size="s">
            <Icon type="heart" color="dark"></Icon>
          </Circle>
          <div class="item__text">
            <Paragraph tagName="p" color="dark" size="xxl" class="title">
              гарантия профессионализма
            </Paragraph>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              работа выполняется опытными специалистами с высоким уровнем квалификации и опытом в области имплантации.
            </Paragraph>
          </div>
        </div>
        <div class="item">
          <Circle tagName="span" color="white" size="s">
            <Icon type="heart" color="dark"></Icon>
          </Circle>
          <div class="item__text">
            <Paragraph tagName="p" color="dark" size="xxl" class="title">
              гарантия безопасности
            </Paragraph>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              строгое соблюдение всех стандартов по стерилизации инструментов и обеспечение безопасной среды для
              пациентов.
            </Paragraph>
          </div>
        </div>
        <div class="item">
          <Circle tagName="span" color="white" size="s">
            <Icon type="heart" color="dark"></Icon>
          </Circle>
          <div class="item__text">
            <Paragraph tagName="p" color="dark" size="xxl" class="title">
              индивидуальный подход
            </Paragraph>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              разработка плана лечения, учитывающего индивидуальные потребности и особенности каждого пациента.
            </Paragraph>
          </div>
        </div>
        <div class="item">
          <Circle tagName="span" color="white" size="s">
            <Icon type="heart" color="dark"></Icon>
          </Circle>
          <div class="item__text">
            <Paragraph tagName="p" color="dark" size="xxl" class="title">
              долгосрочный результат
            </Paragraph>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              предоставляем пожизненную гарантию на конструкцию
            </Paragraph>
          </div>
        </div>
        <div class="item">
          <Circle tagName="span" color="white" size="s">
            <Icon type="heart" color="dark"></Icon>
          </Circle>
          <div class="item__text">
            <Paragraph tagName="p" color="dark" size="xxl" class="title">
              полная прозрачность
            </Paragraph>
            <Paragraph tagName="p" color="dark-gray" size="xs">
              после составления плана лечения создаем смету стоимость которой не меняется в течение всего периода
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-promotion">
    <Container>
      <Heading tagName="h2" regular size="xl">
        стоимость услуг
      </Heading>
      <div class="promotion__content">
        <div class="content__items">
          <div class="item">
            <div class="text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                Компьютерная 3D томография с записью на диск
              </Paragraph>
              <div class="price">
                <Paragraph tagName="span" color="dark-gray" size="xxl">10 000 ₽</Paragraph>
                <Paragraph tagName="span" color="red" size="xxl">5 000 ₽</Paragraph>
              </div>
            </div>
            <Button tagName="button" size="xs" color="white" type="none">
              Оставить заявку
            </Button>
          </div>
          <div class="item">
            <div class="text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                Компьютерная 3D томография с записью на диск
              </Paragraph>
              <div class="price">
                <Paragraph tagName="span" color="dark-gray" size="xxl">10 000 ₽</Paragraph>
                <Paragraph tagName="span" color="red" size="xxl">5 000 ₽</Paragraph>
              </div>
            </div>
            <Button tagName="button" size="xs" color="white" type="none">
              Оставить заявку
            </Button>
          </div>
          <div class="item">
            <div class="text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                Консультация у врачей любой специализации
              </Paragraph>
              <div class="price">
                <Paragraph tagName="span" color="dark-gray" size="xxl"></Paragraph>
                <Paragraph tagName="span" color="red" size="xxl">Бесплатно</Paragraph>
              </div>
            </div>
            <Button tagName="button" size="xs" color="white" type="none">
              Оставить заявку
            </Button>
          </div>
          <div class="item">
            <div class="text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                Протез полный съемный мягкий «Acry Free» (Израиль)
              </Paragraph>
              <div class="price">
                <Paragraph tagName="span" color="dark-gray" size="xxl">10 000 ₽</Paragraph>
                <Paragraph tagName="span" color="red" size="xxl">5 000 ₽</Paragraph>
              </div>
            </div>
            <Button tagName="button" size="xs" color="white" type="none">
              Оставить заявку
            </Button>
          </div>
          <div class="item">
            <Paragraph tagName="span" color="dark" size="xxl" class="discount">скидка -30%</Paragraph>
            <div class="text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                Функциональный анализ на кондилографе у гнатолога
              </Paragraph>
              <div class="price">
                <Paragraph tagName="span" color="dark-gray" size="xxl">10 000 ₽</Paragraph>
                <Paragraph tagName="span" color="red" size="xxl">5 000 ₽</Paragraph>
              </div>
            </div>
            <Button tagName="button" size="xs" color="white" type="none">
              Оставить заявку
            </Button>
          </div>
          <div class="item">
            <div class="text">
              <Paragraph tagName="p" color="dark" size="xxl" class="title">
                Коронка металлокерамическая
              </Paragraph>
              <div class="price">
                <Paragraph tagName="span" color="dark-gray" size="xxl">10 000 ₽</Paragraph>
                <Paragraph tagName="span" color="red" size="xxl">5 000 ₽</Paragraph>
              </div>
            </div>
            <Button tagName="button" size="xs" color="white" type="none">
              Оставить заявку
            </Button>
          </div>

        </div>
      </div>
    </Container>
  </section>
  <Implantation/>
  <DoctorsSlider/>
  <Solution/>
  <Reviews/>
  <Questions/>
  <Map/>
  <Footer/>
</template>
<style scoped lang="scss">
.section-first {
  overflow: hidden;


  .section-first__content {
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    .content__left {
      h2 {
        margin-bottom: 5px;
      }

      .buttons {
        margin-top: 70px;
        display: flex;
        align-items: center;
        gap: 15px;

        p {
          max-width: 98px;
        }

        .button__type-circle {
          width: 60px;
        }
      }
    }

    .content__right {
      display: flex;
      align-items: center;

      .utp {
        position: absolute;
        margin-top: 190px;
        margin-left: -30px;

        .circle {
          width: 30px;
          height: 30px;
        }

        .text {
          backdrop-filter: blur(34px);
          background: rgba(246, 246, 246, 0.5);
          border-radius: 10px;
          padding: 20px;
          max-width: 139px;
        }
      }

      .badge-right {
        .circle {
          backdrop-filter: blur(40px);
          background: rgba(255, 255, 255, 0.1);
          position: absolute;
          right: 125px;
          top: 195px;
          transform: rotate(30deg);
          height: 80px;
          width: 80px;
        }
      }
    }
  }
}

.section-second {
  margin-top: 100px;

  .section-second__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-wrap: wrap;
    gap: 10px;

    .item {
      border-radius: 25px;
      background: #F6F6F6;
      padding: 20px 24px;
      min-height: 100px;
      display: flex;
      gap: 20px;

      .circle {
        width: 60px;
        height: 60px;
        position: absolute;
      }

      .text {
        padding-left: 84px;
        font-size: 16px;
      }
    }
  }
}

.section-test {
  h2 {
    margin: 200px 0 50px;

  }

  .section-test__content {
    display: flex;
    margin-top: 70px;
    gap: 105px;
    justify-content: space-between;

    .content__test {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;

      .title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
      }

      .progress-bar {
        width: 100%;
        background-color: #F6F6F6;
        border-radius: 25px;
        overflow: hidden;
        height: 30px;
        margin-bottom: 65px;

        .progress-fill {
          height: 100%;
          width: 25%;
          border-radius: 20px;
          background: #4965FF;
          transition: width 0.3s ease;
        }
      }

      .test {
        margin-bottom: 80px;

        .title {
          margin-bottom: 30px
        }

        .test__items {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 15px;

          .item {
            display: flex;
            flex-direction: column;
            align-items: center;

            .img {
              width: 100%;
              height: 200px;
              border-radius: 20px;
              margin-bottom: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #F6F6F6;
              cursor: pointer;

              &:hover {
                border: 1px solid #4965FF;

                .circle {
                  display: flex;
                }
              }
            }

            .circle {
              position: absolute;
              margin-top: 153px;
              margin-left: 163px;
              width: 30px;
              height: 30px;
              display: none;
            }

          }

          .active {
            .img {
              border: 1px solid #4965FF;
            }

            .circle {
              display: flex;
            }
          }
        }
      }

      .buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .text {
          max-width: 240px;
        }
        .button{
          width: 230px;
        }
      }
    }

    .content__photo {
      border-radius: 30px;
      background: url("@/assets/images/doctors/doctor_4.png");
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      max-width: 417px;

      .gradient {
        display: flex;
        align-items: end;
        padding: 35px 28px;
        width: 100%;
        height: 100%;
        border-radius: 30px;
        background: linear-gradient(180.00deg, rgba(0, 0, 0, 0) 23.58%, rgb(28, 30, 39) 123.224%);

      }
    }
  }

}

.section-standarts {
  h2 {
    margin: 200px 0 70px;
  }

  .section-standarts__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    .content__items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;

      .item {
        background: #F6F6F6;
        border-radius: 25px;
        padding: 10px 10px 30px 10px;
        min-height: 316px;

        .title {
          margin-bottom: 15px;
        }

        .circle {
          width: 50px;
          height: 50px;
          margin-bottom: 30px;
        }
      }
    }

    .content__photo {
      background: url("@/assets/images/section-standarts.jpg");
      background-position: 60%;
      background-size: 115%;
      border-radius: 25px;
      background-repeat: no-repeat;

      .circle {
        position: absolute;
        margin-top: -70px;
        margin-left: 100px;
        transform: rotate(30deg);
      }
    }
  }
}

.section-all-on-first {
  h2 {
    margin: 200px 0 70px;
  }

  .section-all-on-first__content {
    padding-left: 110px;
    display: flex;
    gap: 10px;
    overflow: hidden;
    position: relative;

    .content__items {
      display: flex;
      gap: 10px;

      .item {
        border-radius: 20px;
        background: #F6F6F6;
        width: 400px;
        padding: 30px;

        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 31px;

          .circle {
            width: 50px;
            height: 50px;
          }

          p {
            font-size: 20px;
          }
        }

        p {
          font-size: 16px;
        }
      }
    }


  }
}

.section-all-on-second {
  h2 {
    margin: 200px 0 70px;
  }

  .section-all-on-second__content {
    .content__video {
      width: 100%;
      background: url("@/assets/images/section-about-background.jpg");
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: 70% 30%;
      overflow: hidden;
      border-radius: 30px;
      height: 500px;

      iframe {
        overflow: hidden;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background: rgba(35, 38, 47, 0.45);
      }
    }

    .content__cards {
      margin-top: 10px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;

      .item {
        border-radius: 20px;
        background: #F1F3F9;
        padding: 30px 25px 40px 25px;

        .circle {
          width: 50px;
          height: 50px;
          position: absolute;

          span {
            font-weight: 500;
          }
        }

        .item__text {
          margin-left: 70px;

          .title {
            margin: 10px 0 15px;
            font-weight: 500;
          }
        }
      }
    }
  }
}

.section-safety {
  h2 {
    margin: 200px 0 70px;
  }

  .section-safety__content {
    margin: 0 110px;

    .content__cards {
      display: grid;
      gap: 10px;
      grid-template-columns: 1fr 1fr 1fr;

      .item {
        border: 1px solid rgba(230, 232, 236, 0.3);
        border-radius: 25px;
        background: rgb(252, 252, 253);
        padding: 30px 25px;
        height: 250px;

        .circle {
          position: absolute;
          width: 50px;
          height: 50px;
          border: 1px solid rgb(245, 246, 248);
          border-radius: 25px;
          background: rgba(73, 101, 255, 0.05);
        }

        .item__text {
          padding-left: 70px;

          .title {
            font-weight: 500;
            margin-bottom: 15px;
          }
        }
      }
    }
  }
}

.section-promotion {
  h2 {
    margin: 200px 0 70px;
  }

  .promotion__content {
    .content__items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px 75px;

      .item {

        .discount {
          border-radius: 7px;
          background: #DBFC5B;
          padding: 5px 10px;
          position: absolute;
          font-size: 19px;
          font-weight: 500;
          margin-top: -40px;
        }

        .text {
          display: flex;
          justify-content: space-between;

          .title {
            max-width: 458px;
            display: flex;
            align-items: end;
          }

          .price {
            display: flex;
            flex-direction: column;
            justify-content: end;

            &:first-child {
              text-decoration: line-through #747B8F;
            }
          }

          .price span:first-child {
            text-decoration: line-through #747B8F;
          }
        }

        .button {
          margin-top: 30px;
          border: 1px solid rgb(28, 30, 39);

          &:hover {
            border: 1px solid #3D4FB3;
          }
        }
      }
    }
  }
}

/*
*/
</style>