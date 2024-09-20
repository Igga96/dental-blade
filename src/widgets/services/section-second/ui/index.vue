<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
</script>
<template>
<section class="section-second">
    <Container>
      <div class="section-second__content">
        <div class="item">
          <Circle tagName="span" color="white" size="m">
            <Icon type="lock" color="none"></Icon>
          </Circle>
          <Paragraph tagName="p" color="dark" size="xs">
            доступный способ востановления всей челюсти
          </Paragraph>
        </div>
        <div class="item">
          <Circle tagName="span" color="white" size="m">
            <Icon type="user&heart" color="none"></Icon>
          </Circle>
          <Paragraph tagName="p" color="dark" size="xs">
            новые зубы фиксируются сразу после установки
          </Paragraph>
        </div>
        <div class="item">
          <Circle tagName="span" color="white" size="m">
            <Icon type="sheldue" color="none"></Icon>
          </Circle>
          <Paragraph tagName="p" color="dark" size="xs">
            не требуется сложная пластика тканей
          </Paragraph>
        </div>
        <div class="item">
          <Circle tagName="span" color="white" size="m">
            <Icon type="smile" color="none"></Icon>
          </Circle>
          <Paragraph tagName="p" color="dark" size="xs">
            просто обслуживать и ухаживать за протезом
          </Paragraph>
        </div>
        <div class="item">
          <Circle tagName="span" color="white" size="m">
            <Icon type="protection" color="none"></Icon>
          </Circle>
          <Paragraph tagName="p" color="dark" size="xs">
            обеспечивают полноценную жевательную функцию
          </Paragraph>
        </div>
        <div class="item">
          <Circle tagName="span" color="white" size="m">
            <Icon type="fire" color="none"></Icon>
          </Circle>
          <Paragraph tagName="p" color="dark" size="xs">
            выглядят и функционируют как естественные зубы
          </Paragraph>
        </div>

      </div>
    </Container>
  </section>

</template>
<style scoped lang="scss">
@import './style.scss';
</style>