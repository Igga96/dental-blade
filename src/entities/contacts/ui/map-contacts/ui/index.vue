<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { Heading } from '@/shared/ui/text/heading';
import { Paragraph } from '@/shared/ui/text/paragraph';

const store = useStore();

const contact = computed(() => store.state.contacts?.contactsData?.[0] ?? null);
const formattedPhone = computed(() => store.getters['contacts/formattedPhone']);
const formattedWorkingHours = computed(() => store.getters['contacts/formattedWorkingHours']);
const formattedEmail = computed(() => store.getters['contacts/formattedEmail']);
</script>

<template>
    <Heading v-if="contact" class="contacts__address" tagName="h4" size="xs" regular>
        {{ contact.address }}
    </Heading>
    <div class="contacts__info">
        <a class="contacts__phone" :href="`tel:${contact.phone}`">
            <Paragraph tagName="span" size="xl" color="dark">{{ formattedPhone }}</Paragraph>
        </a>
        <p class="contacts__time">
            <Paragraph tagName="span" size="xl" color="dark">{{ formattedWorkingHours }}</Paragraph>
        </p>
        <a class="contacts__email" :href="`mailto:${contact.email}`">
            <Paragraph tagName="span" size="xl" color="dark">{{ formattedEmail }}</Paragraph>
        </a>
    </div>
</template>

<style scoped lang="scss">
.contacts__info {
    p{
        margin: 10px 0;
    }
}
</style>
