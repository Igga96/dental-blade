<script setup lang="ts">
import { SectionFirst } from '@/widgets/services/section-first'
import { SectionSecond } from '@/widgets/services/section-second'
import { SectionTest } from '@/widgets/services/section-test'
import { SectionStandarts } from '@/widgets/services/section-standarts'
import { SectionAllOnFirst } from '@/widgets/services/section-all-on-first'
import { SectionAllOnSecond } from '@/widgets/services/section-all-on-second'
import { BeforeAfter } from '@/widgets/section-before-after'
import { SectionSafety } from '@/widgets/services/section-safety'
import { SectionPromotion } from '@/widgets/services/section-promotion'
import { Implantation } from '@/widgets/implantation'
import { DoctorsSlider } from '@/widgets/doctors-slider'
import { Solution } from '@/widgets/section-solution'
import { Reviews } from '@/widgets/section-reviews'
import { Questions } from '@/widgets/section-questions'
import { Map } from '@/widgets/map'
import { Footer } from '@/widgets/footer'

import { reactive } from 'vue';


const sectionSecondData = reactive([
  { id: 0, iconType: 'lock', title: 'доступный способ востановления всей челюсти' },
  { id: 1, iconType: 'user&heart', title: 'новые зубы фиксируются сразу после установки' },
  { id: 2, iconType: 'sheldue', title: 'не требуется сложная пластика тканей' },
  { id: 3, iconType: 'smile', title: 'просто обслуживать и ухаживать за протезом' },
  { id: 4, iconType: 'protection', title: 'обеспечивают полноценную жевательную функцию' },
  { id: 5, iconType: 'fire', title: 'выглядят и функционируют как естественные зубы' },
])
const sectionStandartsData = reactive([
  {
    title: 'стандарт нашей работы никакой боли во время и после операции',
    cards: [
      { id: 0, iconType: 'coloredProtection', title: 'безболезненные уколы', text: 'инновационные капсульные шприцы обладают тонкими и острыми иглами, что минимизирует дискомфорт при введении уколов.' },
      { id: 0, iconType: 'coloredProtection', title: 'быстрое восстановление', text: 'мягкая седация позволяет пациентам чувствовать себя расслабленно и спокойно, уменьшая тревожность и стресс.' },
      { id: 0, iconType: 'coloredProtection', title: 'легкие обезболивающие', text: 'современные обезболивающие препараты не вызывают побочных эффектов, таких как сонливость или расстройства желудка.' },
      { id: 0, iconType: 'coloredProtection', title: 'думаем о вашем комфорте', text: 'использование передовых технологий позволяет нам проводить диагностику и лечение на самом высоком уровне.' },
    ],
    imageBackground: require('@/assets/images/section-standarts.jpg')
  }
])
const sectionSafetyData = reactive([
  {
    title: 'высокие стандарты безопасности и качества',
    cards: [
      { id: 0, iconType: 'checkmark', title: 'гарантия качества материалов', text: 'использование только высококачественных имплантатов и материалов для коронок с сертификацией качества на все материалы' },
      { id: 1, iconType: 'boockmark', title: 'гарантия профессионализма', text: 'работа выполняется опытными специалистами с высоким уровнем квалификации и опытом в области имплантации.' },
      { id: 2, iconType: 'coloredlock', title: 'гарантия безопасности', text: 'строгое соблюдение всех стандартов по стерилизации инструментов и обеспечение безопасной среды для пациентов.' },
      { id: 3, iconType: 'coloreduser', title: 'индивидуальный подход', text: 'разработка плана лечения, учитывающего индивидуальные потребности и особенности каждого пациента.' },
      { id: 4, iconType: 'certificate', title: 'долгосрочный результат', text: 'предоставляем пожизненную гарантию на конструкцию' },
      { id: 5, iconType: 'stars', title: 'полная прозрачность', text: 'после составления плана лечения создаем смету стоимость которой не меняется в течение всего периода' },
    ]
  }
])
const sectionSolutionData = reactive([
  {
    title: 'вне зависимости от состояния здоровья ваша проблема c зубами будет решена!',
    solutions: [
      { id: 0, name: 'полное отсутствие зубов', title: 'протезирование, лечение и имплантация зубов.', doctorFullName: 'Фроленков Александр Сергеевич', introduction: ' к специалистам нашей клиники обратилась 39-летняя пациентка Ю. с просьбой в кратчайшие сроки сделать идеально белую голливудскую улыбку.', treatment: ' установка зубных имплантатов Astra Tech в местах, где отсутствовали зубы; эндодонтическое лечение (подготовка под протезирование); отбеливание зубов системой Zoom 4;', totalCost: 250000, imageBackground: require('@/assets/images/mask_group.png') },
      { id: 1, name: 'зубы подвижны или выпадают', title: 'реставрация зубов композитными материалами.', doctorFullName: 'Циколя Элина Михайловна', introduction: ' к специалистам нашей клиники обратилась 39-летняя пациентка Ю. с просьбой в кратчайшие сроки сделать идеально белую голливудскую улыбку.', treatment: ' установка зубных имплантатов Astra Tech в местах, где отсутствовали зубы; эндодонтическое лечение (подготовка под протезирование); отбеливание зубов системой Zoom 4;', totalCost: 20000, imageBackground: require('@/assets/images/mask_group.png') },
      { id: 2, name: 'наличие воспаления', title: 'протезирование, лечение и имплантация зубов.', doctorFullName: 'Иванов Василий Генрихович', introduction: ' к специалистам нашей клиники обратилась 39-летняя пациентка Ю. с просьбой в кратчайшие сроки сделать идеально белую голливудскую улыбку.', treatment: ' установка зубных имплантатов Astra Tech в местах, где отсутствовали зубы; эндодонтическое лечение (подготовка под протезирование); отбеливание зубов системой Zoom 4;', totalCost: 234000, imageBackground: require('@/assets/images/mask_group.png') },
      { id: 3, name: 'атрофия костной ткани', title: 'лечение и реставрация клиновидного дефекта на нижней челюсти.', doctorFullName: 'Циколя Элина Михайловна', introduction: ' к специалистам нашей клиники обратилась 39-летняя пациентка Ю. с просьбой в кратчайшие сроки сделать идеально белую голливудскую улыбку.', treatment: ' установка зубных имплантатов Astra Tech в местах, где отсутствовали зубы; эндодонтическое лечение (подготовка под протезирование); отбеливание зубов системой Zoom 4;', totalCost: 21500, imageBackground: require('@/assets/images/mask_group.png') },
      { id: 4, name: 'зубы подлежат удалению', title: 'протезирование, лечение и имплантация зубов.', doctorFullName: 'Евтеева Наталья Васильевна', introduction: ' к специалистам нашей клиники обратилась 39-летняя пациентка Ю. с просьбой в кратчайшие сроки сделать идеально белую голливудскую улыбку.', treatment: ' установка зубных имплантатов Astra Tech в местах, где отсутствовали зубы; эндодонтическое лечение (подготовка под протезирование); отбеливание зубов системой Zoom 4;', totalCost: 780000, imageBackground: require('@/assets/images/mask_group.png') },
      { id: 5, name: 'острый пародонтит', title: 'лечение кариеса у ребенка 7 лет под местной анестезией.', doctorFullName: 'Иванов Василий Генрихович', introduction: ' к специалистам нашей клиники обратилась 39-летняя пациентка Ю. с просьбой в кратчайшие сроки сделать идеально белую голливудскую улыбку.', treatment: ' установка зубных имплантатов Astra Tech в местах, где отсутствовали зубы; эндодонтическое лечение (подготовка под протезирование); отбеливание зубов системой Zoom 4;', totalCost: 64000, imageBackground: require('@/assets/images/mask_group.png') },
    ],
  },
])
const sectionPromotionData = reactive([
  {
    title: 'стоимость услуг',
    promotions: [
      { id: 0, name: 'Компьютерная 3D томография с записью на диск', oldPrice: '10000 ₽', newPrice: '5000 ₽' },
      { id: 1, name: 'Компьютерная 3D томография с записью на диск', oldPrice: '10000 ₽', newPrice: '5000 ₽' },
      { id: 2, name: 'Консультация у врачей любой специализации', oldPrice: '', newPrice: 'Бесплатно' },
      { id: 3, name: 'Протез полный съемный мягкий «Acry Free» (Израиль)', oldPrice: '10000 ₽', newPrice: '5000 ₽' },
      { id: 4, name: 'Функциональный анализ на кондилографе у гнатолога', oldPrice: '10000 ₽', newPrice: '5000 ₽', promotion: '30%' },
      { id: 5, name: 'Коронка металлокерамическая', oldPrice: '10000 ₽', newPrice: '5000 ₽' },
    ],
  },
])
const sectionAllOnFirstdData = reactive([
  {
    title: 'Имплантация без боли: All-on-4® при любой степени потери зубов',
    cards: [
      { id: 0, iconType: 'implant', title: 'нет всех зубов', text: ' Замена съемного протеза на конструкцию без нёба с фиксацией на имплантатах улучшает качество жизни на два порядка: ощущается как свои собственные зубы, возвращает полные вкусовые ощущения, не нарушает дикцию.' },
      { id: 1, iconType: 'caries1', title: 'дефицит костной ткани', text: 'Атрофия кости требует проведения надежных, результативных и долговечных, но затратных и отдаляющих протезирование.' },
      { id: 2, iconType: 'caries2', title: 'почти не осталось зубов', text: ' All-on-4® при частичном отсутствии зубов проводится с одновременным удалением всех несостоятельных безнадежных зубов.' },
      { id: 3, iconType: 'implant', title: 'нет всех зубов', text: ' Замена съемного протеза на конструкцию без нёба с фиксацией на имплантатах улучшает качество жизни на два порядка: ощущается как свои собственные зубы, возвращает полные вкусовые ощущения, не нарушает дикцию.' },
    ],
  },
])
const sectionAllOnSecondData = reactive([
  {
    title: 'имплантация All-on-4: как это происходит и что включает в себя.',
    cards: [
      { id: 0, title: 'подготовительный этап', text: 'на консультации врач обсуждает план лечения и осматривает полость рта. Проводится диагностика с компьютерной томографией челюстей и анализами. Создается виртуальная модель будущей улыбки пациента для оптимального результата' },
      { id: 1, title: 'xирургический этап', text: 'при подготовке к имплантации зубов проводится санация полости рта. Затем устанавливается имплантат в челюсть с высокой точностью. Для естественного вида десны вокруг имплантата ставится формирователь десны.' },
      { id: 2, title: 'производственный этап', text: 'для изготовления индивидуальных коронок стоматолог-ортопед снимает слепки зубов и отправляет их в зуботехническую лабораторию для производства временных и постоянных коронок, учитывая выбранный пациентом материал, цвет и форму.' },
      { id: 3, title: 'ортопедический этап', text: ' временные коронки устанавливаются для сохранения эстетики и функциональности перед изготовлением постоянных. После примерки коронок на подгонку и цвет устанавливают постоянные коронки, завершая процедуру имплантации.' },
    ],
    iframeBackground: require('@/assets/images/section-about-background.jpg'),
    linkVideo: 'https://www.youtube.com/embed/TDiGegnG7tU?si=PJTBEUk0H54hdtF7',
    iframeText: 'знайте подробно об этапах 4 all on '
  },
])


</script>
<template>
  <SectionFirst />
  <SectionSecond :sectionSecondData="sectionSecondData" />
  <SectionTest />
  <SectionStandarts :sectionStandartsData="sectionStandartsData[0]" />
  <SectionAllOnFirst :sectionAllOnFirstdData="sectionAllOnFirstdData[0]" />
  <SectionAllOnSecond :sectionAllOnSecondData="sectionAllOnSecondData[0]" />
  <BeforeAfter />
  <SectionSafety :sectionSafetyData="sectionSafetyData[0]" />
  <SectionPromotion :sectionPromotionData="sectionPromotionData[0]" />
  <Implantation />
  <DoctorsSlider />
  <Solution :sectionSolutionData="sectionSolutionData[0]" />
  <Reviews />
  <Questions />
  <Map />
  <Footer />
</template>
<style scoped lang="scss"></style>