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
                images: [
                    { id: 0, path: require('@/assets/images/cases/case_1.png'), isTitle: true },
                    { id: 1, path: require('@/assets/images/cases/case_2.png'), isTitle: false },
                    { id: 2, path: require('@/assets/images/cases/case_4.png'), isTitle: false },
                ],
                name: 'Одномоментная, c удалением зубов, установка дентальных имплантов',
                description: 'Пришла пациентка А. с жалобами на неэстетичность зубов на нижней челюсти, коричневые пятна на зубах в зоне улыбки. Болезненность во время приема кислой и холодной пищи. На приеме был диагностирован диагноз: клиновидный дефект (некариозное поражение зубов, связанное с неправильным перераспределением жевательной нагрузки на зубы) Были проведены консультации врача хирурга-имплантолога, врача-ортопеда и врача-ортодонта для объяснения причины данного заболевания). Было принято решение запломбировать клиновидные дефекты с последующей реабилитацией ортопедическими конструкциями. Зубы 4.4, 4.5 – сформированы полости по 5 классу Блека, проведена ретракция десны (изоляция дефекта от мягких тканей десны), зубы восстановлены реставрациями светового отверждения, отполированы дисками до зеркального блеска. Даны рекомендации – восстановление зубных рядов (есть отсутствующие зубы) для правильного перераспределения жевательной нагрузки.',
                link: '/',
                totalCost: 250000,
                priceId: [
                    { id: 0, name: 'Операция на ретинированном/дистопированном зубе' },
                    { id: 1, name: 'Компьютерная 3D томография с записью на диск' }
                ]

            },
            {
                id: 1,
                category: 'Хирургия',
                images: [
                    { id: 0, path: require('@/assets/images/cases/case_2.png'), isTitle: true }
                ],
                name: 'Лечение и реставрация клиновидного дефекта на нижней челюсти',
                description: 'Пришла пациентка А. с жалобами на неэстетичность зубов на нижней челюсти, коричневые пятна...',
                link: '/',
                totalCost: 250000,
                priceId: [
                    { id: 0, name: 'Операция на ретинированном/дистопированном зубе' },
                    { id: 1, name: 'Компьютерная 3D томография с записью на диск' }
                ]
            },
            {
                id: 2,
                category: 'Детская стоматология',
                images: [
                    { id: 0, path: require('@/assets/images/cases/case_3.png'), isTitle: true }
                ],
                name: 'Лечение кариеса у ребенка 7 лет под местной анестезией',
                description: 'Ребенку 7 лет. Пришли с целью санации. Проведено лечение кариеса в кресле под местной анест...',
                link: '/',
                totalCost: 250000,
                priceId: [
                    { id: 0, name: 'Операция на ретинированном/дистопированном зубе' },
                    { id: 1, name: 'Компьютерная 3D томография с записью на диск' }
                ]
            },
            {
                id: 3,
                category: 'Ортодонтия',
                images: [
                    { id: 0, path: require('@/assets/images/cases/case_4.png'), isTitle: true }
                ],
                name: 'Эстетическая реставрация зубов композитными материалами',
                description: 'Эстетическая реставрация зубов композитными материалами Estelaite Sigma Quick...',
                link: '/',
                totalCost: 250000,
                priceId: [
                    { id: 0, name: 'Операция на ретинированном/дистопированном зубе' },
                    { id: 1, name: 'Компьютерная 3D томография с записью на диск' }
                ]
            },
            {
                id: 4,
                category: 'Терапевтические услуги',
                images: [
                    { id: 0, path: require('@/assets/images/cases/case_1.png'), isTitle: true }
                ],
                name: ' Лечение и реставрация клиновидного дефекта на нижней челюсти',
                description: 'Пришла пациентка А. с жалобами на неэстетичность зубов на нижней челюсти, коричневые пятна...',
                link: '/',
                totalCost: 250000,
                priceId: [
                    { id: 0, name: 'Операция на ретинированном/дистопированном зубе' },
                    { id: 1, name: 'Компьютерная 3D томография с записью на диск' }
                ]
            },
            {
                id: 5,
                category: 'Ортопедия',
                images: [
                    { id: 0, path: require('@/assets/images/cases/case_2.png'), isTitle: true }
                ],
                name: 'Одномоментная, c удалением зубов, установка дентальных имплантов',
                description: 'Одномоментная, c удалением зубов, имплантация в области 34, 32, 42 ,44. Через 4 месяца...',
                link: '/',
                totalCost: 250000,
                priceId: [
                    { id: 0, name: 'Операция на ретинированном/дистопированном зубе' },
                    { id: 1, name: 'Компьютерная 3D томография с записью на диск' }
                ]
            },
            {
                id: 6,
                category: 'Рентгенологическое исследование',
                images: [
                    { id: 0, path: require('@/assets/images/cases/case_3.png'), isTitle: true }
                ],
                name: 'Лечение и реставрация клиновидного дефекта на нижней челюсти',
                description: 'Пришла пациентка А. с жалобами на неэстетичность зубов на нижней челюсти, коричневые пятна...',
                link: '/',
                totalCost: 250000,
                priceId: [
                    { id: 0, name: 'Операция на ретинированном/дистопированном зубе' },
                    { id: 1, name: 'Компьютерная 3D томография с записью на диск' }
                ]
            },
            {
                id: 7,
                category: 'Компьютерная томография',
                images: [
                    { id: 0, path: require('@/assets/images/cases/case_4.png'), isTitle: true }
                ],
                name: 'Лечение кариеса у ребенка 7 лет под местной анестезией',
                description: 'Ребенку 7 лет. Пришли с целью санации. Проведено лечение кариеса в кресле под местной анест...',
                link: '/',
                totalCost: 250000,
                priceId: [
                    { id: 0, name: 'Операция на ретинированном/дистопированном зубе' },
                    { id: 1, name: 'Компьютерная 3D томография с записью на диск' }
                ]
            },
            {
                id: 8,
                category: 'Ортопедия',
                images: [
                    { id: 0, path: require('@/assets/images/cases/case_2.png'), isTitle: true }
                ],
                name: 'Эстетическая реставрация зубов композитными материалами',
                description: 'Эстетическая реставрация зубов композитными материалами Estelaite Sigma Quick...',
                link: '/',
                totalCost: 250000,
                priceId: [
                    { id: 0, name: 'Операция на ретинированном/дистопированном зубе' },
                    { id: 1, name: 'Компьютерная 3D томография с записью на диск' }
                ]
            },
            {
                id: 9,
                category: 'Компьютерная томография',
                images: [
                    { id: 0, path: require('@/assets/images/cases/case_1.png'), isTitle: true }
                ],
                name: ' Лечение и реставрация клиновидного дефекта на нижней челюсти',
                description: 'Пришла пациентка А. с жалобами на неэстетичность зубов на нижней челюсти, коричневые пятна...',
                link: '/',
                totalCost: 250000,
                priceId: [
                    { id: 0, name: 'Операция на ретинированном/дистопированном зубе' },
                    { id: 1, name: 'Компьютерная 3D томография с записью на диск' }
                ]
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
        },
        getCaseById: (state: CasesState) => (id: number) => {
            return state.casesData.find((caseItem: CaseItem) => caseItem.id === id) || null;
        },
        getTitleImage: (state: CasesState) => (id: number) => {
            const caseItem = state.casesData.find((caseItem: CaseItem) => caseItem.id === id);
            return caseItem?.images.find(image => image.isTitle) || null;
        },
        

    }
};

