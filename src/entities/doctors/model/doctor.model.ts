import { computed } from 'vue';
import { useStore } from 'vuex';

export function useDoctorBySlug(slug: string) {
    const store = useStore();
    const doctor = computed(() => store.getters['doctors/getDoctorBySlug'](slug));

    return {
        doctor
    };
}
