import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { CaseItem } from '@/entities/cases/model/cases.types';

export const useCaseData = () => {
  const route = useRoute();
  const store = useStore();
  const slug = route.params.slug

  const caseSlug = computed(() => String(slug));
  const caseData = computed<CaseItem | null>(() => store.getters['cases/getCaseBySlug'](caseSlug.value));

  const caseDescription = computed(() => {
    if (caseData.value && caseData.value.description.length > 0) {
      const { introduction, diagnos, treatment } = caseData.value.description[0];
      return {
        introduction,
        diagnos,
        treatment,
      };
    }
    return null;
  }); 
  const formatCost = (cost: number): string => {
    return cost.toLocaleString('ru-RU');
  };

  const formattedCost = computed(() => {
    return caseData.value ? `${formatCost(caseData.value.totalCost)} руб.` : '0 руб.';
  });

  return {
    caseData,
    formattedCost,
    caseDescription
  };
};