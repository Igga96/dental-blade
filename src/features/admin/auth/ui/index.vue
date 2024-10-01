<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { Circle } from '@/shared/ui/circle';
import { Icon } from '@/shared/ui/icons';
import { Logo } from '@/shared/ui/logo';

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
    <section class="admin-panel">
        <div class="maincontainer">
            <Circle tagName="span" color="accent" size="s">
                <Icon type="caries2" color="white"></Icon>
            </Circle>
            <form @submit.prevent="login">
                <Logo />
                <div class="input-field">
                    <input type="text" v-model="username" id="username" required>
                    <label for="username">Enter your username*</label>
                </div>
                <div class="input-field">
                    <input type="password" v-model="password" id="password" required>
                    <label for="password">Enter your Password*</label>
                </div>
                <button type="submit">Log In</button>
                <p v-if="error">{{ error }}</p>

            </form>
        </div>
    </section>
</template>
<style scoped lang="scss">
@import './style.scss';
</style>