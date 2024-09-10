import { CaseItem } from './cases.types';

interface CasesState {
    casesData: CaseItem[];
    selectedCategory: string | null;
}

export const casesModule = {
    namespaced: true,
    state: () => ({
        casesData: <CaseItem[]>[
            {
                id: 0,
                category: 'Имплантология',
                imgPath: require('@/assets/images/cases/1.png'),
                name: 'Одномоментная, c удалением зубов, установка дентальных имплантов',
                description: 'Одномоментная, c удалением зубов, имплантация в области 34, 32, 42 ,44. Через 4 месяца...',
                link: '/'
            },
            {
                id: 1,
                category: 'Хирургия',
                imgPath: require('@/assets/images/cases/2.png'),
                name: 'Лечение и реставрация клиновидного дефекта на нижней челюсти',
                description: 'Пришла пациентка А. с жалобами на неэстетичность зубов на нижней челюсти, коричневые пятна...',
                link: '/'
            },
            {
                id: 2,
                category: 'Детская стоматология',
                imgPath: require('@/assets/images/cases/3.png'),
                name: 'Лечение кариеса у ребенка 7 лет под местной анестезией',
                description: 'Ребенку 7 лет. Пришли с целью санации. Проведено лечение кариеса в кресле под местной анест...',
                link: '/'
            },
            {
                id: 3,
                category: 'Ортодонтия',
                imgPath: require('@/assets/images/cases/4.png'),
                name: 'Эстетическая реставрация зубов композитными материалами',
                description: 'Эстетическая реставрация зубов композитными материалами Estelaite Sigma Quick...',
                link: '/'
            },
            {
                id: 4,
                category: 'Терапевтические услуги',
                imgPath: require('@/assets/images/cases/1.png'),
                name: ' Лечение и реставрация клиновидного дефекта на нижней челюсти',
                description: 'Пришла пациентка А. с жалобами на неэстетичность зубов на нижней челюсти, коричневые пятна...',
                link: '/'
            },
            {
                id: 5,
                category: 'Ортопедия',
                imgPath: require('@/assets/images/cases/2.png'),
                name: 'Одномоментная, c удалением зубов, установка дентальных имплантов',
                description: 'Одномоментная, c удалением зубов, имплантация в области 34, 32, 42 ,44. Через 4 месяца...',
                link: '/'
            },
            {
                id: 6,
                category: 'Рентгенологическое исследование',
                imgPath: require('@/assets/images/cases/3.png'),
                name: 'Лечение и реставрация клиновидного дефекта на нижней челюсти',
                description: 'Пришла пациентка А. с жалобами на неэстетичность зубов на нижней челюсти, коричневые пятна...',
                link: '/'
            },
            {
                id: 7,
                category: 'Компьютерная томография',
                imgPath: require('@/assets/images/cases/4.png'),
                name: 'Лечение кариеса у ребенка 7 лет под местной анестезией',
                description: 'Ребенку 7 лет. Пришли с целью санации. Проведено лечение кариеса в кресле под местной анест...',
                link: '/'
            },
            {
                id: 8,
                category: 'Ортопедия',
                imgPath: require('@/assets/images/cases/2.png'),
                name: 'Эстетическая реставрация зубов композитными материалами',
                description: 'Эстетическая реставрация зубов композитными материалами Estelaite Sigma Quick...',
                link: '/'
            },
            {
                id: 9,
                category: 'Компьютерная томография',
                imgPath: require('@/assets/images/cases/1.png'),
                name: ' Лечение и реставрация клиновидного дефекта на нижней челюсти',
                description: 'Пришла пациентка А. с жалобами на неэстетичность зубов на нижней челюсти, коричневые пятна...',
                link: '/'
            },
        ]
    }),
    getters: {
        filteredCases: (state: CasesState, getters: any, rootState: any) => {
            const selectedCategory = rootState.sidebar.selectedCategory;
            if (!selectedCategory) {
                return state.casesData;
            }
            return state.casesData.filter((caseItem: CaseItem) => caseItem.category === selectedCategory);
        },
        uniqueCategories: (state: CasesState) => {
            const categories = new Set(state.casesData.map((caseItem: CaseItem) => caseItem.category));
            return Array.from(categories).map((category, index) => ({
                id: index,
                category
            }));
        },
        shouldShowPagination: (state: CasesState, getters: any) => {
            const filteredCases = getters.filteredCases;
            return filteredCases.length >= 10;
        }
    }
};

