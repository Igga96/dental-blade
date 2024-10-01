<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Paragraph } from '@/shared/ui/text/paragraph'
import { Logo } from '@/shared/ui/logo';


</script>

<template>
    <aside>
        <Logo />
        <ul>
            <li>
                <RouterLink to="/admin/users">
                    <Paragraph tagName="span" size="xxl" color="white">пользователи</Paragraph>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/admin/doctors">
                    <Paragraph tagName="span" size="xxl" color="white">врачи</Paragraph>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/admin/prices">
                    <Paragraph tagName="span" size="xxl" color="white">цены</Paragraph>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/admin/cases">
                    <Paragraph tagName="span" size="xxl" color="white">кейсы</Paragraph>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/admin/contacts">
                    <Paragraph tagName="span" size="xxl" color="white">контакты</Paragraph>
                </RouterLink>
            </li>
        </ul>
    </aside>
</template>
<style lang="scss" scoped>
aside {
    background: #23262F;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 25px;
    ul{
        li{
            padding: 25px 0;
        }
    }
}
</style>