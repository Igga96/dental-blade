<script setup lang="ts">
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
import { Button } from '@/shared/ui/button';
</script>

<template>
    <div class="reservation">
        <div class="reservation__item">
            <Circle tagName="span" size="s" color="gray">
                <Icon type="tooth" color="gray"></Icon>
            </Circle>
            <div class="reservation__item_select">
                <p>процедура</p>
                <select name="Выберите процедуру" id="">
                    <option value="">выберите процедуру</option>
                </select>
            </div>
        </div>
        <div class="reservation__item">
            <Circle tagName="span" size="s" color="gray">
                <Icon type="user" color="gray"></Icon>
            </Circle>
            <div class="reservation__item_select">
                <p>врач</p>
                <select name="Выберите процедуру" id="">
                    <option value="">выберите врача</option>
                </select>
            </div>
        </div>
        <div class="reservation__item">
            <Circle tagName="span" size="s" color="gray">
                <Icon type="time" color="gray"></Icon>
            </Circle>
            <div class="reservation__item_select">
                <p>дата и время</p>
                <select name="Выберите процедуру" id="">
                    <option value="">выберите дату и время</option>
                </select>
            </div>
        </div>
        <Button tagName="button" size="s" color="accent" type="none">записаться</Button>
    </div>
</template>
<style scoped lang="scss">
.reservation {
    position: relative;
    z-index: 11111111;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 50px;
    margin-top: -75px;
    border: 1px solid rgba(119, 126, 144, 0.05);
    border-radius: 24px;
    box-shadow: 0px 40px 64px -32px rgba(15, 15, 15, 0.1);
    backdrop-filter: blur(32px);
    background: linear-gradient(30.11deg, rgb(252, 252, 253) 39.724%, rgba(252, 252, 253, 0.83) 98.69%);

}

.reservation__item {
    display: flex;
    align-items: center;

    .circle {
        width: 55px;
        height: 55px;
    }
}

.reservation__item_select {
    margin-left: 10px;

    select {
        border: none;
        background: none;
    }
}

@media screen and (max-width: 768px) {
    .reservation {
        flex-direction: column;
        gap: 25px;
        padding: 20px;

        .reservation__item {
            .reservation__item_select {
                width: 100%;

                select {
                    width: 100%;
                }
            }

        }
    }
}</style>