<script setup lang="ts">
import { Button } from '@/shared/ui/button';
</script>
<template>
    <div class="pagination">
        <Button tag-name="button" size="xs" color="white" type="none" class="disabled">&#171;</Button>
        <Button tag-name="button" size="xs" color="white" type="none" class="disabled">&#8249;</Button>
        <Button tag-name="button" size="xs" color="white" type="none" class="active">1</Button>
        <Button tag-name="button" size="xs" color="white" type="none">2</Button>
        <Button tag-name="button" size="xs" color="white" type="none">3</Button>
        <Button tag-name="button" size="xs" color="white" type="none">...</Button>
        <Button tag-name="button" size="xs" color="white" type="none">10</Button>
        <Button tag-name="button" size="xs" color="white" type="none">&#8250;</Button>
        <Button tag-name="button" size="xs" color="white" type="none">&#187;</Button>
    </div>
</template>
<style scoped lang="scss">
.pagination {
    margin: 60px 0 97px;
    display: flex;
    justify-content: center;
    gap: 5px;


    .button {
        border-radius: 8px;
        border: 1px solid rgb(241, 242, 244);
        padding: 0;
        width: 50px;

        &:hover {
            background: #4963FF;
            border: 1px solid #4963FF;
            color: white;
        }
    }

    .active {
        color: white;
        background: #4963FF;
        border: 1px solid #4963FF;
    }
    .disabled{
        cursor: default;
        &:hover{
            background: none;
            color: #23262F;
            border: 1px solid rgb(241, 242, 244);
        }
    }
}
</style>