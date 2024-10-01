<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Heading } from '@/shared/ui/text/heading';
import axios from 'axios';

const clinicId = ref(''); 
const address = ref('');
const phone = ref('');
const timeStart = ref('');
const timeEnd = ref('');
const email = ref('');
const wsLink = ref('');
const vkLink = ref('');
const tgLink = ref('');
const fbLink = ref('');
const contactId = ref(null);

const fetchContacts = async () => {
    try {
        const response = await axios.get('/api/contacts');
        if (response.data.length > 0) {
            const contact = response.data[0];
            contactId.value = contact.id;
            clinicId.value = contact.clinicId; 
            address.value = contact.address;
            phone.value = contact.phone;
            timeStart.value = contact.timeStart;
            timeEnd.value = contact.timeEnd;
            email.value = contact.email;
            wsLink.value = contact.wsLink;
            vkLink.value = contact.vkLink;
            tgLink.value = contact.tgLink;
            fbLink.value = contact.fbLink;
        }
    } catch (error) {
        console.error('Ошибка при загрузке контактных данных:', error);
    }
};

onMounted(() => {
    fetchContacts();
});

const saveContacts = async () => {
    const data = {
        clinicId: clinicId.value, 
        address: address.value,
        phone: phone.value,
        timeStart: timeStart.value,
        timeEnd: timeEnd.value,
        email: email.value,
        wsLink: wsLink.value,
        vkLink: vkLink.value,
        tgLink: tgLink.value,
        fbLink: fbLink.value,
    };

    try {
        if (contactId.value) {
            await axios.put(`/api/contacts/${contactId.value}`, data);
        } else {
            await axios.post('/api/contacts', data);
        }
        console.log('Данные успешно сохранены');
    } catch (error) {
        console.error('Ошибка при сохранении данных:', error);
    }
};
</script>

<template>
    <section class="admin-contacts">
        <Heading tagName="h2" size="xl">Контакты клиники</Heading>
        <hr>
        <form @submit.prevent="saveContacts" class="contacts-form">
            <div class="form-item">
                <label>Введите ID клиники(в соответствии с интеграционной платформой)</label>
                <input v-model="clinicId" placeholder="ID клиники" />
            </div>
            <div class="form-item">
                <label>Введите адрес</label>
                <input v-model="address" placeholder="Москва, Кутузовский пр-кт, 45" />
            </div>
            <div class="form-item">
                <label>Введите рабочий телефон</label>
                <input v-model="phone" placeholder="+74959889939" />
            </div>
            <div class="form-item">
                <label>Выберите время начала работы</label>
                <input v-model="timeStart" type="time" />
            </div>
            <div class="form-item">
                <label>Выберите время окончания работы</label>
                <input v-model="timeEnd" type="time" />
            </div>
            <div class="form-item">
                <label>Введите email</label>
                <input v-model="email" type="email" placeholder="dental-blade@mail.ru" />
            </div>
            <div class="form-item">
                <label>Введите номер для связи в WhatsApp</label>
                <input v-model="wsLink" placeholder="+74959889939" />
            </div>
            <div class="form-item">
                <label>Введите ссылку для связи в VK</label>
                <input v-model="vkLink" placeholder="https://www.vk.com/dental-blade" />
            </div>
            <div class="form-item">
                <label>Введите ник либо номер для связи в Telegram</label>
                <input v-model="tgLink" placeholder="dental-blade/+79617977454" />
            </div>
            <div class="form-item">
                <label>Введите ссылку для связи в Facebook</label>
                <input v-model="fbLink" placeholder="https://www.facebook.com/dental-blade" />
            </div>
            <button type="submit">Сохранить</button>
        </form>
    </section>
</template>

<style scoped lang="scss">
.admin-contacts {
    width: 100%;

    hr {
        margin: 32px 0;
        border: none;
        border-top: 1px solid #F1F2F4;
    }

    h2 {
        padding-left: 110px;
    }

    .contacts-form {
        padding-left: 110px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .form-item {
            display: flex;
            flex-direction: column;


            label {
                margin-bottom: 5px;
            }
            input{
                max-width: 600px;
            }
        }

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
}</style>
