<script setup lang="ts">
import { Container } from '@/shared/ui/container'
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
import { Button } from '@/shared/ui/button';
import { Contacts } from '@/entities/contacts/ui/map-contacts'
</script>
<template>
    <section class="section-map">
        <Container>
            <div class="section-map__content">
                <Circle tagName="span" color="accent" size="l" class="map-circle-heart">
                    <Icon type="heart" color="white"></Icon>
                </Circle>
                <div class="contacts">
                    <Contacts/>
                    <div class="blur__button">
                        <Button tagName="button" type="none" size="s" color="white"></Button>
                        <Circle tagName="span" color="white" size="m">
                            <Icon type="arrow" color="dark"></Icon>
                        </Circle>
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>
<style lang="scss">
@import './style.scss';
</style>