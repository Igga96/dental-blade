import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { CaseItem } from '@/entities/cases/model/cases.types';

export const useCaseData = () => {
  const route = useRoute();
  const store = useStore();

  const caseId = computed(() => Number(route.params.id));
  const caseData = computed<CaseItem | null>(() => store.getters['cases/getCaseById'](caseId.value));

  const formatCost = (cost: number): string => {
    return cost.toLocaleString('ru-RU');
  };

  const formattedCost = computed(() => {
    return caseData.value ? `${formatCost(caseData.value.totalCost)} руб.` : '0 руб.';
  });

  return {
    caseData,
    formattedCost,
  };
};