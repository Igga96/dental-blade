import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

interface SolutionItem {
  id: number;
  name: string;
  title: string;
  doctorFullName: string;
  introduction: string;
  treatment: string;
  totalCost: number;
  imageBackground: string;
} 

export function useSolutionSelector(solutions: SolutionItem[]) {
  const store = useStore(); 
  const selectedSolution = ref<SolutionItem | null>(null);

  const activeIndex = computed(() => {
    return solutions.findIndex(solution => solution.id === selectedSolution.value?.id);
  });

  onMounted(() => {
    if (solutions.length > 0) {
      selectedSolution.value = solutions[0];
    }
  });

  const selectSolution = (solution: SolutionItem) => {
    selectedSolution.value = solution;
  };

  const selectPreviousSolution = () => {
    if (activeIndex.value > 0) {
      selectedSolution.value = solutions[activeIndex.value - 1];
    }
  };

  const selectNextSolution = () => {
    if (activeIndex.value < solutions.length - 1) {
      selectedSolution.value = solutions[activeIndex.value + 1];
    }
  };

  const isPreviousDisabled = computed(() => activeIndex.value === 0);
  const isNextDisabled = computed(() => activeIndex.value === solutions.length - 1);

  const formatCost = (cost: number): string => {
    return cost.toLocaleString('ru-RU'); 
  };

  const formattedTotalCost = computed(() => {
    if (selectedSolution.value) {
      return `${formatCost(selectedSolution.value.totalCost)} руб`; 
    }
    return '0 руб.'; 
  });

  return {
    selectedSolution,
    activeIndex,
    selectSolution,
    selectPreviousSolution,
    selectNextSolution,
    isPreviousDisabled,
    isNextDisabled,
    formattedTotalCost, 
  };
}
