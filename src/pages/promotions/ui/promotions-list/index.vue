<script setup lang="ts">
import { Heading } from '@/shared/ui/text/heading'
import { Promotions } from '@/entities/promotions/'

</script>
<template>
    <Container>
        <Heading tagName="h2" regular size="xxl">
            акции
        </Heading>
        <hr />
        <section class="promotions-list">
            <Promotions />
        </section>
    </Container>
</template>
<style scoped lang="scss">
.promotions-list{
    margin-top: 100px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
hr {
    margin: 30px 0;
    border: none;
    border-top: 1px solid #F1F2F4;
}

h2 {
    margin-top: 50px;
}
@media screen and (max-width:769px) {
    h2{
        margin-top: 30px;
    }
    .promotions-list{
    margin-top: 30px;
}
    
}
</style>