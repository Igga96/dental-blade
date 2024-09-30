<script setup lang="ts">
import { AdminSidebar } from '@/features/admin/sidebar';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isAuthenticated = computed(() => store.state.auth.isAuthenticated);
</script>

<template>
  <div class="admin__content">
    <AdminSidebar v-if="isAuthenticated" />
    <RouterView />
  </div>
</template>

<style>
.admin__content {
  display: flex;
  gap: 100px;
}
</style>