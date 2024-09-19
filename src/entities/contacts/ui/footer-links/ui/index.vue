<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { Icon } from '@/shared/ui/icons';
const store = useStore();

const contact = computed(() => store.state.contacts?.contactsData?.[0] ?? null);

const hasLink = (link: string | null) => link && link.length > 1;
</script>

<template>
    <ul class="social-links">
        <li v-if="hasLink(contact.wsLink)">
            <a :href="`https://wa.me/${contact.wsLink}`" target="_blank">
                <Icon type="WS" color="none"></Icon>
            </a>
        </li>
        <li v-if="hasLink(contact.tgLink)">
            <a :href="`https://t.me/${contact.tgLink}`" target="_blank">
                <Icon type="TG" color="none"></Icon>
            </a>
        </li>
        <li v-if="hasLink(contact.vkLink)">
            <a :href="contact.vkLink" target="_blank">
                <Icon type="VK" color="none"></Icon>
            </a>
        </li>
        <li v-if="hasLink(contact.fbLink)">
            <a :href="contact.fbLink" target="_blank">
                <Icon type="FB" color="none"></Icon>
            </a>
        </li>
    </ul>
</template>