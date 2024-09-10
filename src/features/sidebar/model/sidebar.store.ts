interface SidebarState {
    selectedCategory: string | null;
}

export const sidebarModule = {
    namespaced: true,
    state: (): SidebarState => ({
        selectedCategory: null
    }),
    mutations: {
        setCategory(state: SidebarState, category: string | null) {
            state.selectedCategory = category;
        }
    },
    actions: {
        selectCategory({ commit }: { commit: Function }, category: string | null) {
            commit('setCategory', category);
        }
    },
    getters: {
        selectedCategory: (state: SidebarState) => state.selectedCategory
    }
};

