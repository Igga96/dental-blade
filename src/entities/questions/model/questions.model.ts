import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export function useQuestionsModel() {
    const store = useStore();
    const questions = computed(() => store.state.questions.QuestionsData);

    const activeQuestionIndex = ref<number | null>(null);

    const toggleQuestion = (index: number) => {
        activeQuestionIndex.value = activeQuestionIndex.value === index ? null : index;
    };

    return {
        questions,
        activeQuestionIndex,
        toggleQuestion
    };
}