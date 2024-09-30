<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { Heading } from '@/shared/ui/text/heading';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Tags } from '@/features/tags';
import { Icon } from '@/shared/ui/icons';
import { Sheldue } from '@/features/sheldue'
import { Rating } from '@/shared/ui/rating';
import { RouterLink } from 'vue-router';

const store = useStore();
const doctorsData = computed(() => store.getters['doctors/formattedDoctors']);

</script>

<template>
  <Heading tagName="h2" regular size="xxl">
    наши специалисты
  </Heading>
  <hr />
  <Tags />
  <section class="section-doctors">
    <div class="section-doctors__content">
      <div v-for="(doctor, index) in doctorsData" :key="doctor.id" class="item">
        <div class="item__info">
          <div class="info__content-left">
            <div class="photo">
              <div class="doctor-photo" :style="{ backgroundImage: `url(${doctor.imgPath})` }"
                :aria-label="`${doctor.firstName} ${doctor.lastName}`"></div>
              <Rating :value="doctor.rating" />
              <Paragraph tagName="p" size="xs" color="dark">
                98% пациентов рекомендуют врача
              </Paragraph>
              <a class="review__link" href="">109 отзывов</a>
            </div>
            <div class="item__description">
              <RouterLink :to="`/doctors/${doctor.slug}`">
                <Paragraph tagName="p" size="xs" color="dark-gray">
                  {{ doctor.specialties }}
                </Paragraph>
                <Heading tagName="h2" regular size="xs" color="dark">
                  {{ doctor.fullName }}
                </Heading>
                <div class="expierence">
                  <Paragraph tagName="span" size="xs" color="dark-gray">
                    {{ doctor.experienceText }}
                  </Paragraph>
                  <span class="dot"></span>
                  <Paragraph tagName="span" size="xs" color="dark-gray">
                    {{ doctor.category }}
                  </Paragraph>
                </div>
              </RouterLink>
              <div class="phone">
                <Paragraph tagName="p" size="xs" color="dark-gray">
                  телефон для записи
                </Paragraph>
                <a href="">
                  <Paragraph tagName="p" size="xxl" color="dark">
                    8 (800) 888 88 88
                  </Paragraph>
                </a>
              </div>
              <div class="chat">
                <Paragraph tagName="span" size="xs" color="dark-gray">
                  наш чат:
                </Paragraph>
                <ul class="social-links">
                  <li>
                    <a href="">
                      <Icon type="WS" color="none" :size="25" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <Icon type="TG" color="none" :size="25" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Sheldue />
        </div>
        <hr v-if="index < doctorsData.length - 1" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>