import { computed } from 'vue';
import { useStore } from 'vuex';

export function useDoctorById(doctorId: number) {
    const store = useStore();
    const doctor = computed(() => store.getters['doctors/getDoctorById'](doctorId));

    return {
        doctor
    };
}