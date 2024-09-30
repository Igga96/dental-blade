<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const username = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();
const store = useStore();

const login = () => {
    if (username.value === 'admin' && password.value === 'admin') {
        store.commit('setAuth', true);
        router.push({ name: 'admin-dashboard' });
    } else {
        error.value = 'Неправильный логин или пароль';
    }
};
</script>
<template>
    <div class="admin-login">
        <h1>Вход в админ-панель</h1>
        <form @submit.prevent="login">
            <div>
                <label for="username">Логин</label>
                <input type="text" v-model="username" id="username" />
            </div>
            <div>
                <label for="password">Пароль</label>
                <input type="password" v-model="password" id="password" />
            </div>
            <button type="submit">Войти</button>
        </form>
        <p v-if="error">{{ error }}</p>
    </div>
</template>