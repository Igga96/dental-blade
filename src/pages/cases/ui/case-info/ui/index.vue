<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { CasePhotosSlider } from '@/features/cases/casePhotos';
import { CaseInfo } from '@/entities/cases/ui/case-info'
import { Button } from '@/shared/ui/button';
import { Paragraph } from '@/shared/ui/text/paragraph';

const route = useRoute();
const store = useStore();

const caseId = computed(() => Number(route.params.id));
const caseData = computed(() => store.getters['cases/getCaseById'](caseId.value));
</script>

<template>
    <hr>
    <section v-if="caseData" class="case-info">
        <div class="case-info__content">
            <CasePhotosSlider :images="caseData.images" :caseName="caseData.name" />
            <div class="case__description">
                <CaseInfo :caseId="caseId" />
                <Button tagName="button" size="xs" color="accent" type="none">
                    <Paragraph tagName="span" color="white" size="m">
                        Записаться на приём
                    </Paragraph>
                </Button>
            </div>
        </div>
    </section>
    <div v-else>
        eror 404 not found
    </div>
</template>


<style scoped lang="scss">
@import './style.scss';
</style>
