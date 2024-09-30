<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Paragraph } from '@/shared/ui/text/paragraph'


</script>

<template>
    <aside>
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
<style lang="scss">
aside {
    background: #23262F;
    display: flex;
    width: 300px;
    height: 100vh;

    ul {
        li {
            width: 300px;
        }
    }
}
</style>