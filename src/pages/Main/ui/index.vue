<script setup lang="ts">
import { SectionFirst } from '@/widgets/main/section-first'
import { Container } from '@/shared/ui/container'
import { Booking } from '@/features/booking';
import { SectionSecond } from '@/widgets/main/section-second'
import { SectionThird } from '@/widgets/main/section-third'
import { DoctorsSlider } from '@/widgets/doctors-slider'
import { SectionAbout } from '@/widgets/main/section-about'
import { Implantation } from '@/widgets/implantation'
import { Solution } from '@/widgets/section-solution'
import { BeforeAfter } from '@/widgets/section-before-after'
import { SectionNine } from '@/widgets/main/section-nine'
import { SectionTechnology } from '@/widgets/main/section-technology'
import { Reviews } from '@/widgets/section-reviews'
import { Questions } from '@/widgets/section-questions'
import { Map } from '@/widgets/map'
import { Footer } from '@/widgets/footer'
import { reactive } from 'vue';

const sectionSecondData = reactive([
  {
    title: 'один визит в клинику приблизит вас к качественному решению любой проблемы.',
    iconType: 'arrow',
    cards: [
      { id: 0, background: require('@/assets/images/main-page/section-second/dental_service_1.png'), title: 'лечение зубов', text: 'осстановление формы, функции пораженного зуба и установка пломбы' },
      { id: 1, background: require('@/assets/images/main-page/section-second/dental_service_2.png'), title: 'установка брекетов', text: 'установка брекетов для коррекции положения зубов и прикуса' },
      { id: 2, background: require('@/assets/images/main-page/section-second/dental_service_3.png'), title: 'чистка зубов', text: 'гигиена профессиональная чистка зубов и нейтрализация зубного камня' },
      { id: 3, background: require('@/assets/images/main-page/section-second/dental_service_4.png'), title: 'установка виниров', text: 'восстановление эстетических и функциональных свойств зубов' },
      { id: 4, background: require('@/assets/images/main-page/section-second/dental_service_5.png'), title: 'хирургия', text: 'передовые методы хирургического вмешательства для решения сложных заболеваний полости рта' },
      { id: 5, background: require('@/assets/images/main-page/section-second/dental_service_6.png'), title: 'имплантация', text: 'классическая, одноэтапная, базальная имплантация зубов, имплантация «All - on - 4», имплантация «All - on - 6»' }
    ]
  }
])
const sectionThirdData = reactive([
  {
    title: 'Клиника ”Дентал Клиник”',
    description: [
      { id: 0, iconType: 'coloredProtection', count: '2000', text: 'успешных операций в год' },
      { id: 1, iconType: 'coloredUser', count: '44', text: 'квалифицированных специалиста' },
      { id: 2, iconType: 'coloredHeart', count: '10 000 +', text: 'клиентов, которые доверят нашей клинике' },
      { id: 3, iconType: 'coloredTooth', count: '7 лет', text: 'работаем по технологии All-on-4' },
    ],
    iframeBackground: require('@/assets/images/section-third-background.jpg'),
    linkVideo: ''
  }
])
const sectionAboutData = reactive([
  {
    title: 'о нашей клинике',
    text: 'у нас работают стоматологи высшей категории, доценты и профессора — врачи c высоким уровнем профессионализма и личной ответственности, способные действовать в команде и постоянно совершенствоваться.',
    description: [
      { id: 0, iconType: 'shield&tick', text: 'cтрогие стандарты безопасности и высокое качество' },
      { id: 0, iconType: 'user&heart', text: 'гарантия на все виды стоматологических услуг' },
      { id: 0, iconType: 'sheldue', text: 'точность и эффективность' },
    ],
    iframeBackground: require('@/assets/images/section-about-background.jpg'),
    linkVideo: ''


  }
])
const sectionSolutionData = reactive([
  {
    title: 'вне зависимости от состояния здоровья ваша проблема c зубами будет решена!',
    solutions: [
      { id: 0, name: 'полное отсутствие зубов', title:'протезирование, лечение и имплантация зубов.', doctorFullName: 'Фроленков Александр Сергеевич', introduction: ' к специалистам нашей клиники обратилась 39-летняя пациентка Ю. с просьбой в кратчайшие сроки сделать идеально белую голливудскую улыбку.', treatment: ' установка зубных имплантатов Astra Tech в местах, где отсутствовали зубы; эндодонтическое лечение (подготовка под протезирование); отбеливание зубов системой Zoom 4;', totalCost: 250000, imageBackground: require('@/assets/images/mask_group.png') },
      { id: 1, name: 'зубы подвижны или выпадают', title:'реставрация зубов композитными материалами.', doctorFullName: 'Циколя Элина Михайловна', introduction: ' к специалистам нашей клиники обратилась 39-летняя пациентка Ю. с просьбой в кратчайшие сроки сделать идеально белую голливудскую улыбку.', treatment: ' установка зубных имплантатов Astra Tech в местах, где отсутствовали зубы; эндодонтическое лечение (подготовка под протезирование); отбеливание зубов системой Zoom 4;', totalCost: 20000, imageBackground: require('@/assets/images/mask_group.png') },
      { id: 2, name: 'наличие воспаления', title:'протезирование, лечение и имплантация зубов.',doctorFullName: 'Иванов Василий Генрихович', introduction: ' к специалистам нашей клиники обратилась 39-летняя пациентка Ю. с просьбой в кратчайшие сроки сделать идеально белую голливудскую улыбку.', treatment: ' установка зубных имплантатов Astra Tech в местах, где отсутствовали зубы; эндодонтическое лечение (подготовка под протезирование); отбеливание зубов системой Zoom 4;', totalCost: 234000, imageBackground: require('@/assets/images/mask_group.png') },
      { id: 3, name: 'атрофия костной ткани', title:'лечение и реставрация клиновидного дефекта на нижней челюсти.', doctorFullName: 'Циколя Элина Михайловна', introduction: ' к специалистам нашей клиники обратилась 39-летняя пациентка Ю. с просьбой в кратчайшие сроки сделать идеально белую голливудскую улыбку.', treatment: ' установка зубных имплантатов Astra Tech в местах, где отсутствовали зубы; эндодонтическое лечение (подготовка под протезирование); отбеливание зубов системой Zoom 4;', totalCost: 21500, imageBackground: require('@/assets/images/mask_group.png') },
      { id: 4, name: 'зубы подлежат удалению', title:'протезирование, лечение и имплантация зубов.', doctorFullName: 'Евтеева Наталья Васильевна', introduction: ' к специалистам нашей клиники обратилась 39-летняя пациентка Ю. с просьбой в кратчайшие сроки сделать идеально белую голливудскую улыбку.', treatment: ' установка зубных имплантатов Astra Tech в местах, где отсутствовали зубы; эндодонтическое лечение (подготовка под протезирование); отбеливание зубов системой Zoom 4;', totalCost: 780000, imageBackground: require('@/assets/images/mask_group.png') },
      { id: 5, name: 'острый пародонтит', title:'лечение кариеса у ребенка 7 лет под местной анестезией.', doctorFullName: 'Иванов Василий Генрихович', introduction: ' к специалистам нашей клиники обратилась 39-летняя пациентка Ю. с просьбой в кратчайшие сроки сделать идеально белую голливудскую улыбку.', treatment: ' установка зубных имплантатов Astra Tech в местах, где отсутствовали зубы; эндодонтическое лечение (подготовка под протезирование); отбеливание зубов системой Zoom 4;', totalCost: 64000, imageBackground: require('@/assets/images/mask_group.png') },
    ],
  },
])
const sectionNineData = reactive([
  {
    title: 'ВАШЕ РЕШЕНИЕ ПРИЙТИ И ДОВЕРИТСЯ НАМ - ЭТО ШАГ К ПОЛНОЦЕННОЙ ЖИЗНИ!',
    heading: 'достижения и награды клиники',
    description: [
      { id: 0, text: 'Врачи – отличники стоматологии' },
      { id: 1, text: 'Авторские методики, одобренные профессиональными ассоциациями' },
      { id: 2, text: 'Официальный партнер Straumann и Nobel Biocare' },
    ],
    text: 'Мы вкладываемся в развитие клиники, непрерывное обучение специалистов у экспертов мирового класса, в лучшее оборудование и организацию сервиса по высоким европейским стандартам.',
    imageBackground: require('@/assets/images/section-nine-background.png')
  },
])
const sectionTechnologyData = reactive([
  {
    title: 'технологии в дентал клиник',
    cards: [
      { id: 0, title: 'американские протоколы', text: 'Мы постоянно инвестируем в современные стоматологические технологии и оборудование, для точной диагностики и эффективного лечения.' },
      { id: 1, title: 'полный цифровой протокол', text: 'В нашем центре мы используем цифровой протокол, который применяется на всех этапах диагностики, профилактики и лечения.' },
      { id: 2, title: 'безопасность процедур', text: 'Мы обеспечиваем максимальный контроль качества в ходе многофакторной стерилизации, гарантируя 100% защиту от ВИЧ и гепатита.' },
    ]
  }
])
</script>
<template>
  <SectionFirst />
  <Container>
    <Booking />
  </Container>
  <SectionSecond :sectionSecondData="sectionSecondData[0]" />
  <SectionThird :sectionThirdData="sectionThirdData[0]" />
  <DoctorsSlider />
  <SectionAbout :sectionAboutData="sectionAboutData[0]" />
  <Implantation />
  <Solution :sectionSolutionData="sectionSolutionData[0]" />
  <BeforeAfter />
  <SectionNine :sectionNineData="sectionNineData[0]" />
  <SectionTechnology :sectionTechnologyData="sectionTechnologyData[0]" />
  <Reviews />
  <Questions />
  <Map />
  <Footer />
</template>
<style scoped lang="scss">
.section__tittle-with-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .btn__slide {
    display: flex;
    align-items: end;
    margin-bottom: 70px;
    gap: 10px;
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

@media screen and (max-width: 768px) {
  .section__tittle-with-buttons {
    .btn__not-slide {
      display: flex;
      align-items: end;
      margin-bottom: 40px;

      .button {
        white-space: nowrap;
      }

      .circle {
        width: 60px;
        height: 60px;
      }
    }
  }

}
</style>