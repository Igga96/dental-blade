<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';

import { Heading } from '@/shared/ui/text/heading';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Button } from '@/shared/ui/button';
import { Tags } from '@/features/tags';
import { Icon } from '@/shared/ui/icons';
import { Rating } from '@/shared/ui/rating';
import { RouterLink } from 'vue-router';


const store = useStore();
const doctorsData = computed(() => store.getters['doctors/formattedDoctors']);
</script>

<template>
  <Heading tagName="h2" regular size="xxl">
    Наши специалисты
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
              <a href="">109 отзывов</a>
            </div>
            <div class="item__description">
              <RouterLink :to="`/doctors/${doctor.id}`">
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
                      <Icon type="WS" color="none" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <Icon type="TG" color="none" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="info__content-right">
            <div class="date-slider">

              <ul slidesPerView="auto" spaceBetween={10} class="date-slider__items">
                <li class="item item_active-date">
                  <Paragraph tagName="p" color="dark" size="m" class="date">
                    15 сент
                  </Paragraph>
                  <Paragraph tagName="p" color="dark" size="m" class="day">
                    сегодня
                  </Paragraph>
                </li>
                <li class="item item_busy-date">
                  <Paragraph tagName="p" color="dark" size="m" class="date">
                    16 сент
                  </Paragraph>
                  <Paragraph tagName="p" color="dark" size="m" class="day">
                    завтра
                  </Paragraph>
                </li>
                <li class="item item_free-date">
                  <Paragraph tagName="p" color="dark" size="m" class="date">
                    17 сент
                  </Paragraph>
                  <Paragraph tagName="p" color="dark" size="m" class="day">
                    вт
                  </Paragraph>
                </li>
                <li class="item item_free-date">
                  <Paragraph tagName="p" color="dark" size="m" class="date">
                    18 сент
                  </Paragraph>
                  <Paragraph tagName="p" color="dark" size="m" class="day">
                    ср
                  </Paragraph>
                </li>
                <li class="item item_free-date">
                  <Paragraph tagName="p" color="dark" size="m" class="date">
                    19 сент
                  </Paragraph>
                  <Paragraph tagName="p" color="dark" size="m" class="day">
                    чт
                  </Paragraph>
                </li>
              </ul>
            </div>
            <div class="time-slider">
              <ul class="time-slider__items">
                <li class="item item_active">
                  <Paragraph tagName="span" color="dark" size="m">
                    09:00
                  </Paragraph>
                </li>
                <li class="item ">
                  <Paragraph tagName="span" color="dark" size="m">
                    10:00
                  </Paragraph>
                </li>
                <li class="item">
                  <Paragraph tagName="span" color="dark" size="m">
                    11:00
                  </Paragraph>
                </li>
                <li class="item">
                  <Paragraph tagName="span" color="dark" size="m">
                    12:00
                  </Paragraph>
                </li>
                <li class="item">
                  <Paragraph tagName="span" color="dark" size="m">
                    13:00
                  </Paragraph>
                </li>
                <li class="item">
                  <Paragraph tagName="span" color="dark" size="m">
                    14:00
                  </Paragraph>
                </li>
              </ul>
            </div>
            <Button tagName="button" color="white" size="xs" type="none">
              записаться на прием
            </Button>
          </div>
        </div>
        <hr v-if="index < doctorsData.length - 1" />
      </div>
    </div>
  </section>
</template>



  
<style scoped lang="scss">
.section-doctors {
  margin-top: 100px;

  .section-doctors__content {

    .item {

      hr {
        margin: 70px 0;
      }

      .item__info {
        display: flex;
        justify-content: space-between;
        gap: 32px;

        .info__content-left {
          display: flex;
          gap: 50px;

          .photo {
            align-items: center;
            display: flex;
            flex-direction: column;

            .doctor-photo {
              display: block;
              background-position: 0% 20%;
              background-size: 100%;
              background-repeat: no-repeat;
              border-radius: 10px;
              margin-bottom: 25px;
              width: 282px;
              height: 304px;

            }
          }

          .item__description {
            width: 472px;
            padding-top: 14px;

            h2 {
              margin: 5px 0 16px;
              color: #23262F;
            }

            .expierence {
              display: flex;
              align-items: center;
              gap: 12px;
              margin-bottom: 65px;

              .dot {
                display: inline-block;
                background: rgb(116, 123, 143);
                width: 4px;
                height: 4px;
                border-radius: 90px;
              }
            }

            .phone {
              a p.text {
                margin-top: 5px;
              }
            }

            .chat {
              margin-top: 20px;
              display: flex;
              align-items: center;
              gap: 10px;

              .social-links {
                display: flex;
                gap: 5px;

                li {
                  a {
                    svg {
                      rect {
                        width: 25px;
                        height: 25px;
                      }
                    }
                  }
                }
              }
            }
          }


        }

        .info__content-right {
          overflow: hidden;

          .date-slider {

            .date-slider__items {
              display: flex;
              overflow: hidden;

              .item {
                min-width: 100px;
                padding: 15px 8px 8px 15px;
                border: 1px solid rgb(241, 242, 244);
                border-radius: 4px;
                cursor: pointer;

                .date {
                  font-size: 18px;
                  font-weight: 500;
                }

                .day {
                  font-size: 14px;
                }

              }

              .item_active-date {
                background: #4963FF;

                .day,
                .date {
                  color: white;
                }
              }

              .item_busy-date {

                .day,
                .date {
                  color: #B1B5C3;
                  cursor: default;
                }
              }

            }
          }

          .time-slider {
            margin: 25px 0 45px;

            .time-slider__items {
              display: flex;
              flex-wrap: wrap;
              gap: 5px;

              .item {
                cursor: pointer;
                padding: 8px 15px;
                border: 1px solid rgb(241, 242, 244);
                border-radius: 4px;
              }

              .item_active {
                background: #4963FF;

                .text {
                  color: white;
                }
              }
            }
          }
        }
      }

    }
  }
}

hr {
  margin: 32px 0;
  color: #B1B5C3;
}
</style>