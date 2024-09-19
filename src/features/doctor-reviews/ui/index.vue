<script setup lang="ts">
import { Button } from '@/shared/ui/button';

</script>
<template>
    <div class="doctor__rating">
        фича с блоком отзывов и отправкой отзыва
        <Button tagName="button" size="xs" type="none" color="accent">оставить отзыв</Button>
    </div>
</template>
<style lang="scss" scoped>
.doctor__rating {
    display: flex;
    flex-direction: column;
    grid-column: 2;
    .button{
        width: 208px;
    }
}
@media screen and (max-width: 541px) {
    .doctor__rating {
        .button{
width: 100%;
        }
    }
}
</style>