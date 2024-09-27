<script setup lang="ts">
</script>
<template>
    <div class="container">
        <slot></slot>
    </div>
</template>
<style scoped>
.container {
    margin: 0 240px;
}

@media screen and (max-width: 1681px) {
    .container {
    margin: 0 200px;
}
}

@media screen and (max-width: 1441px) {
    .container {
    margin: 0 110px;
}
}

@media screen and (max-width: 768px) {
    .container {
        margin: 0 45px;
    }
}

@media screen and (max-width: 541px) {
    .container {
        margin: 0 20px;
    }
}
</style>