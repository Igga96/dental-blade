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

</script>
<template>
  <SectionFirst />
  <SectionSecond />
  <SectionTest />
  <SectionStandarts />
  <SectionAllOnFirst />
  <SectionAllOnSecond />
  <BeforeAfter />
  <SectionSafety :sectionSafetyData="sectionSafetyData[0]" />
  <SectionPromotion />
  <Implantation />
  <DoctorsSlider />
  <Solution :sectionSolutionData="sectionSolutionData[0]" />
  <Reviews />
  <Questions />
  <Map />
  <Footer />
</template>
<style scoped lang="scss"></style>