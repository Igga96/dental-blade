<script setup lang="ts">
</script>
<template>
    <div class="container">
        <slot></slot>
    </div>
</template>
<style scoped>
.container {
    margin: 0 110px;
    border: 1px solid red
}

@media screen and (max-width: 768px) {
    .container {
        margin: 0 45px;
    }
}

@media screen and (max-width: 375px) {
    .container {
        margin: 0 20px;
    }

}
</style>