<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import axios from 'axios';
import { Heading } from '@/shared/ui/text/heading';
import { Paragraph } from '@/shared/ui/text/paragraph';

interface Case {
    id: number;
    name: string;
    category: string;
    description: { introduction: string; diagnos: string; treatment: string }[];
    totalCost: number;
    images: { id: number; path: string; isTitle: boolean }[];
    priceId: number[]; 
}

const casesData = ref<Case[]>([]);
const pricesData = ref<any[]>([]);
const selectedCase = ref<Case | null>(null); 

const fetchCases = async () => {
    try {
        const response = await axios.get('/cases');
        casesData.value = response.data;
    } catch (error) {
        console.error('Ошибка при получении кейсов:', error);
    }
};

const fetchPrices = async () => {
    try {
        const response = await axios.get('/prices');
        pricesData.value = response.data;
    } catch (error) {
        console.error('Ошибка при получении цен:', error);
    }
};

const fetchCaseById = async (id: number) => {
    try {
        const response = await axios.get(`/cases${id}`);
        selectedCase.value = response.data;
    } catch (error) {
        console.error('Ошибка при получении кейса:', error);
    }
};

const saveChanges = async () => {
    if (selectedCase.value) {
        try {
            await axios.put(`/cases/${selectedCase.value.id}`, selectedCase.value);
            console.log('Изменения успешно сохранены для кейса:', selectedCase.value);
            cancelEdit(); 
            await fetchCases();
        } catch (error) {
            console.error('Ошибка при сохранении изменений:', error);
        }
    }
};

const selectCase = (item: Case) => { 
    fetchCaseById(item.id);
};

const cancelEdit = () => {
    selectedCase.value = null;
};

const uploadImage = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files ? target.files[0] : null; 
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const newImageObject = {
                id: selectedCase.value?.images.length ?? 0,
                path: e.target?.result as string,
                isTitle: false
            };
            selectedCase.value?.images.push(newImageObject);
        };
        reader.readAsDataURL(file);
    }
};

const setTitleImage = (image: { isTitle: boolean }) => { 
    selectedCase.value?.images.forEach(img => img.isTitle = false);
    image.isTitle = true;
};

onMounted(() => {
    fetchCases();
    fetchPrices();
});
</script>

<template>
    <section class="admin-cases">
        <Heading tagName="h2" size="xl">Кейсы клиники</Heading>
        <hr>
        <div class="cases__content">
            <template v-if="selectedCase">
                <form class="cases-form">
                    <div class="form-item item-images">
                        <label>Добавьте изображения кейса:</label>
                        <ul>
                            <li v-for="image in selectedCase.images" :key="image.id">
                                <img :src="image.path" alt="" style="width: 100px; height: auto;" />
                                <p>Сделать титульным
                                    <input type="checkbox" :checked="image.isTitle" @change="setTitleImage(image)" />
                                </p>
                            </li>
                        </ul>
                        <input type="file" @change="uploadImage" accept="image/*" />
                    </div>
                    <div class="form-item">
                        <label for="case-name">Название кейса:</label>
                        <input id="case-name" v-model="selectedCase.name" />
                    </div>
                    <div class="form-item">
                        <label for="case-category">Категория:</label>
                        <input id="case-category" v-model="selectedCase.category" />
                    </div>
                    <div class="form-item">
                        <label for="case-description">Вводная часть:</label>
                        <textarea id="case-description" v-model="selectedCase.description[0].introduction"></textarea>
                    </div>
                    <div class="form-item">
                        <label for="case-diagnos">Диагноз:</label>
                        <textarea id="case-diagnos" v-model="selectedCase.description[0].diagnos"></textarea>
                    </div>
                    <div class="form-item">
                        <label for="case-treatment">Лечение:</label>
                        <textarea id="case-treatment" v-model="selectedCase.description[0].treatment"></textarea>
                    </div>
                    <div class="form-item">
                        <label for="case-total-cost">Общая стоимость:</label>
                        <input id="case-total-cost" type="number" v-model="selectedCase.totalCost" />
                    </div>
                    <div class="form-item item-prices">
                        <label>Выберите оказанные услуги из списка</label>
                        <ul>
                            <li v-for="service in pricesData" :key="service.id">
                                <label>
                                    <input type="checkbox" :value="service.id" v-model="selectedCase.priceId" />
                                    {{ service.name }}
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div class="buttons">
                        <button type="button" @click="saveChanges">Сохранить</button>
                        <button type="button" @click="cancelEdit">Отменить</button>
                    </div>
                </form>
            </template>
            <template v-else>
                <ul class="cases-list">
                    <li v-for="item in casesData" :key="item.id" class="list__item" @click="selectCase(item)">
                        <Paragraph tagName="p" size="m" color="dark">
                            {{ item.name }}
                        </Paragraph>
                    </li>
                </ul>
            </template>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.admin-cases {
    width: 100%;
    height: 100vh;

    hr {
        margin: 32px 0;
        border: none;
        border-top: 1px solid #F1F2F4;
    }

    h2 {
        padding-left: 110px;
    }

    .cases-form {
        display: flex;
        flex-direction: column;
        padding-left: 110px;

        .form-item {
            display: flex;
            flex-direction: column;
        }

        .item-images {
            ul {
                display: flex;
            }
        }
        .item-prices {
        max-height: 200px; 
        overflow-y: auto;  
        border: 1px solid #F1F2F4; 
        padding: 10px; 
        border-radius: 5px; 
        background-color: #fff;
    }

        .buttons {
            margin-top: 50px;
            display: flex;
            justify-content: space-around;

            button {
                border-radius: 90px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                font-size: 18px;
                line-height: 21.78px;
                font-weight: 500;
                background: #4963FF;
                color: white;
                width: 240px;
                padding: 10px 20px;

                &:hover {
                    background: #3D4FB3;
                }
            }
        }
    }

    .cases-list {
        padding-left: 110px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .list__item {
            max-width: 40%;
            cursor: pointer;

            &:hover {
                background: #B1B5C3;
            }
        }
    }
}
</style>
