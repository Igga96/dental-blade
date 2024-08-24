<script setup lang="ts">
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
import { Button } from '@/shared/ui/button';
</script>

<template>
    <div class="reservation">
        <div class="reservation__item">
            <Circle tagName="button" size="m" color="accent">
                <Icon type="tooth" color="gray"></Icon>
            </Circle>
            <div class="reservation__item_select">
                <p>процедура</p>
                <select name="Выберите процедуру" id="">
                    <option value=""></option>
                </select>
            </div>
        </div>
        <div class="reservation__item">
            <Circle tagName="button" size="m" color="accent">
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
            <Circle tagName="button" size="m" color="accent">
                <Icon type="time" color="gray"></Icon>
            </Circle>
            <div class="reservation__item_select">
                <p>дата и время</p>
                <select name="Выберите процедуру" id="">
                    <option value="">выберите дату и время</option>
                </select>
            </div>
        </div>
        <Button tagName="button" size="s">записаться</Button>
    </div>
</template>
<style scoped>
.reservation {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: #FFFF;
    border: 1px solid green;
    border-radius: 50px;
    padding: 40px 20px;
    margin-top: -70px;
}

.reservation__item {
    display: flex;
    align-items: center;
}

.reservation__item_select {
    margin-left: 10px
}
</style>