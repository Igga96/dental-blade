interface AuthState {
    isAuthenticated: boolean;
    sessionTimeout: number | null;
}
export const authModule = {
    state: (): AuthState => ({
        isAuthenticated: false,
        sessionTimeout: null,
    }),
    mutations: {
        setAuth(state: AuthState, status: boolean) {
            state.isAuthenticated = status;
            if (status) {
                state.sessionTimeout = window.setTimeout(() => {
                    state.isAuthenticated = false;
                }, 15 * 60 * 1000);
            } else if (state.sessionTimeout) {
                clearTimeout(state.sessionTimeout);
                state.sessionTimeout = null;
            }
        },
    },
    actions: {
        logout({ commit }: { commit: Function }) {
            commit('setAuth', false);
        },
    },
    getters: {
        isAuthenticated: (state: AuthState) => state.isAuthenticated,
    },
};

