<script setup lang="ts">
import { Button } from '@/shared/ui/button';

</script>
<template>
    <div class="doctor__rating">
        фича с блоком отзывов и отправкой отзыва
        <Button tagName="button" size="xs" type="none" color="accent">оставить отзыв</Button>
    </div>
</template>
<style>
.doctor__rating {
    display: flex;
    flex-direction: column;
    grid-column: 2;
}
</style>