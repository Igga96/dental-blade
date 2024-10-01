<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { Heading } from '@/shared/ui/text/heading';
import { Paragraph } from '@/shared/ui/text/paragraph';
import { Prices } from '@/entities/price/model/price.types';

const store = useStore();

const pricesData = computed(() => store.state.prices.pricesData);
const showAddForm = ref(false);
const newService = ref<{ category: string; name: string; price: string }>({ category: '', name: '', price: '' });
const editService = ref<Prices | null>(null); 

const saveNewService = () => {
    console.log('Сохранение новой услуги:', newService.value);
    cancelAddService();
};

const cancelAddService = () => {
    showAddForm.value = false;
    newService.value = { category: '', name: '', price: '' };
};

const editSelectedService = (price: Prices) => {
    editService.value = price;
    newService.value = { ...price }; 
};

const saveChanges = () => {
    console.log('Сохранение изменений для услуги:', newService.value);
    cancelEdit();
    editService.value = null; 
};

const cancelEdit = () => {
    editService.value = null;
    newService.value = { category: '', name: '', price: '' };
};
</script>

<template>
    <section class="admin-prices">
        <Heading tagName="h2" size="xl">Цены и услуги клиники</Heading>
        <hr>
        <div class="cases__content">
            <button @click="showAddForm = true">Добавить услугу</button>
            <template v-if="showAddForm">
                <div class="add-service-form">
                    <h3>Добавить новую услугу</h3>
                    <div class="form-item">
                        <label for="service-category">Категория:</label>
                        <input id="service-category" v-model="newService.category" />
                    </div>
                    <div class="form-item">
                        <label for="service-name">Название услуги:</label>
                        <input id="service-name" v-model="newService.name" />
                    </div>
                    <div class="form-item">
                        <label for="service-price">Цена:</label>
                        <input id="service-price" type="number" v-model="newService.price" />
                    </div>
                    <div class="buttons">
                        <button type="button" @click="saveNewService">Сохранить</button>
                        <button type="button" @click="cancelAddService">Отменить</button>
                    </div>
                </div>
            </template>
            <ul class="prices-list">
                <li v-for="price in pricesData" :key="price.id">
                    <div @click="editSelectedService(price)">
                        <Paragraph tagName="p" size="m" color="dark">
                            {{ price.category }}: {{ price.name }} - {{ price.price }} руб.
                        </Paragraph>
                    </div>
                    <template v-if="editService && editService.id === price.id">
                        <div class="edit-service-form">
                            <h3>Редактировать услугу</h3>
                            <div class="form-item">
                                <label for="edit-service-category">Категория:</label>
                                <input id="edit-service-category" v-model="newService.category" />
                            </div>
                            <div class="form-item">
                                <label for="edit-service-name">Название услуги:</label>
                                <input id="edit-service-name" v-model="newService.name" />
                            </div>
                            <div class="form-item">
                                <label for="edit-service-price">Цена:</label>
                                <input id="edit-service-price" type="number" v-model="newService.price" />
                            </div>
                            <div class="buttons">
                                <button type="button" @click="saveChanges">Сохранить изменения</button>
                                <button type="button" @click="cancelEdit">Отменить</button>
                            </div>
                        </div>
                    </template>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.admin-prices {
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

    .cases__content {
        padding-left: 110px;

        .prices-list {
            li {
                cursor: pointer;
                padding: 10px;
                border-bottom: 1px solid #F1F2F4;

                &:hover {
                    background: #B1B5C3;
                }

                .edit-service-form {
                    margin-top: 10px;
                    padding: 10px;
                    border: 1px solid #F1F2F4;
                    border-radius: 5px;
                    background-color: #fff;

                    .form-item {
                        margin-bottom: 10px;

                        label {
                            display: block;
                            margin-bottom: 5px;
                        }

                        input {
                            width: 100%;
                            padding: 8px;
                            border: 1px solid #F1F2F4;
                            border-radius: 4px;
                        }
                    }

                    .buttons {
                        margin-top: 10px;

                        button {
                            margin-right: 10px;
                            padding: 8px 12px;
                            border: none;
                            border-radius: 4px;
                            background-color: #007bff;
                            color: white;
                            cursor: pointer;

                            &:hover {
                                background-color: #0056b3;
                            }
                        }
                    }
                }
            }
        }

        .add-service-form {
            margin-top: 20px;
            padding: 10px;
            border: 1px solid #F1F2F4;
            border-radius: 5px;
            background-color: #fff;

            .form-item {
                margin-bottom: 10px;

                label {
                    display: block;
                    margin-bottom: 5px;
                }

                input {
                    width: 100%;
                    padding: 8px;
                    border: 1px solid #F1F2F4;
                    border-radius: 4px;
                }
            }

            .buttons {
                margin-top: 10px;

                button {
                    margin-right: 10px;
                    padding: 8px 12px;
                    border: none;
                    border-radius: 4px;
                    background-color: #007bff;
                    color: white;
                    cursor: pointer;

                    &:hover {
                        background-color: #0056b3;
                    }
                }
            }
        }
    }
}
</style>
