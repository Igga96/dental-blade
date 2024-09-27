<script setup lang="ts">
import { Icon } from '@/shared/ui/icons';
import { Circle } from '@/shared/ui/circle';
import { Button } from '@/shared/ui/button';
import { CustomSelect } from '@/shared/ui/custom-select';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { ref } from 'vue';

const store = useStore();

const doctors = computed(() => store.getters['doctors/formattedDoctors']);
interface Doctor {
    id: number;
    fullName: string;
}
const doctorOptions = computed(() => {
    return doctors.value.map((doctor: Doctor) => ({
        id: doctor.id,
        name: doctor.fullName,
    }));
});

const prices = computed(() => store.getters['prices/filteredPrices']);
interface Price {
    id: number;
    name: string;
}
const priceOptions = computed(() => {
    return prices.value.map((price: Price) => ({
        id: price.id,
        name: price.name,
    }));
});

const schedule = [
    { id: 0, date: '2024-09-25', time: '10:00', name: '25 сентября 2024 года, 10:00' },
    { id: 1, date: '2024-09-26', time: '14:00', name: '26 сентября 2024 года, 14:00' }
];
interface Schedule {
    id: number;
    name: string;
}
const scheduleOptions = computed(() => {
    return schedule.map((slot: Schedule) => ({
        id: slot.id,
        name: slot.name,
    }));
});

const handleSelectDoctor = (selectedDoctorId: number) => {
    console.log('Выбранный доктор ID:', selectedDoctorId);
};
const handleSelectSchedule = (selectedScheduleId: number) => {
    console.log('Выбранное расписание ID:', selectedScheduleId);
};

const activeSelect = ref<string | null>(null);

const handleToggleSelect = (selectName: string, isOpen: boolean) => {
    if (isOpen) {
        activeSelect.value = selectName;  
    } else {
        activeSelect.value = null; 
    }
};
</script>

<template>
    <div class="reservation">
        <div class="reservation__item">
            <Circle tagName="span" size="s" color="gray">
                <Icon type="tooth" color="gray"></Icon>
            </Circle>
            <div class="reservation__item_select">
                <Paragraph tagName="p" color="dark" size="l" class="item__title">
                    процедура
                </Paragraph>
                <CustomSelect 
                    :options="priceOptions" 
                    placeholder="выберите процедуру" 
                    labelKey="name" 
                    valueKey="id"
                    :isActive="activeSelect === 'price'"
                    @select="handleSelectDoctor"
                    @toggle="handleToggleSelect('price', $event)" />
            </div>
        </div>

        <div class="reservation__item">
            <Circle tagName="span" size="s" color="gray">
                <Icon type="user" color="gray"></Icon>
            </Circle>
            <div class="reservation__item_select">
                <Paragraph tagName="p" color="dark" size="l" class="item__title">
                    врач
                </Paragraph>
                <CustomSelect 
                    :options="doctorOptions" 
                    placeholder="выберите врача" 
                    labelKey="name" 
                    valueKey="id"
                    :isActive="activeSelect === 'doctor'"
                    @select="handleSelectDoctor"
                    @toggle="handleToggleSelect('doctor', $event)" />
            </div>
        </div>

        <div class="reservation__item">
            <Circle tagName="span" size="s" color="gray">
                <Icon type="time" color="gray"></Icon>
            </Circle>
            <div class="reservation__item_select">
                <Paragraph tagName="p" color="dark" size="l" class="item__title">
                    дата и время
                </Paragraph>
                <CustomSelect 
                    :options="scheduleOptions" 
                    placeholder="выберите дату и время" 
                    labelKey="name"
                    valueKey="id" 
                    :isActive="activeSelect === 'schedule'"
                    @select="handleSelectSchedule"
                    @toggle="handleToggleSelect('schedule', $event)" />
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
    margin-top: -71px;
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
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 55px;
        height: 55px;
    }
}

.reservation__item_select {
    margin-left: 65px;
    width: 220px;

    .item__title {
        font-weight: 500;
    }

    .custom-select {
        border: none;
        background: none;
        font-size: 16px;
        line-height: 24px;
        color: #747B8F;
        background: transparent;
        border: 1px solid transparent;
        cursor: pointer;
    }
}

@media screen and (max-width: 768px) {
    .reservation {
        flex-direction: column;
        gap: 25px;
        padding: 20px;
        overflow: hidden;
        .reservation__item {
            .reservation__item_select {
                width: 100%;
                

                select {
                    width: 100%;
                }
            }

        }
    }
}
</style>