import { Prices } from './price.types';

interface PricesState {
    pricesData: Prices[];
}

export const pricesModule = {
    namespaced: true,
    state: () => ({
        pricesData: <Prices[]>[
            {
                id: 0,
                category: 'Компьютерная томография',
                name: 'Компьютерная томография челюстно-лицевой области',
                price: '5000'
            },
            {
                id: 1,
                category: 'Компьютерная томография',
                name: 'Компьютерная томография для пациентов сторонних клиник',
                price: '5000'
            },
            {
                id: 2,
                category: 'Рентгенологическое исследование',
                name: 'Ортопантомограмма',
                price: '5000'
            },
            {
                id: 3,
                category: 'Рентгенологическое исследование',
                name: 'Ортопантомография (на вынос)',
                price: '5000'
            },
            {
                id: 4,
                category: 'Рентгенологическое исследование',
                name: 'Рентгенограмма зуба прицельная',
                price: '5000'
            },
            {
                id: 5,
                category: 'Терапевтические услуги',
                name: 'Консультация первичного пациента с определением плана и стоимости лечения',
                price: '500'
            },
            {
                id: 6,
                category: 'Терапевтические услуги',
                name: 'Консультация кандидата медицинских наук с определением плана и стоимости лечения',
                price: '5000'
            },
            {
                id: 7,
                category: 'Терапевтические услуги',
                name: 'Проводниковая анестезия',
                price: '5000'
            },
            {
                id: 8,
                category: 'Терапевтические услуги',
                name: 'Инфильтрационная анестезия',
                price: '5000'
            },
            {
                id: 9,
                category: 'Терапевтические услуги',
                name: 'Удаление зубных отложений в области одного зуба с использованием ультразвука',
                price: '5000'
            },
            {
                id: 10,
                category: 'Терапевтические услуги',
                name: 'Проведение процедуры AIR-FLOW в области одного зуба',
                price: '5000'
            },
            {
                id: 11,
                category: 'Ортопедия',
                name: 'Вкладка культевая КХС',
                price: '28000'
            },
            {
                id: 12,
                category: 'Ортопедия',
                name: 'Коронка металлокерамическая из импортного материала',
                price: '5000'
            },
            {
                id: 13,
                category: 'Ортопедия',
                name: 'Коронка безметалловая Emax',
                price: '28000'
            },
            {
                id: 14,
                category: 'Ортопедия',
                name: 'Иммедиат-протез полный',
                price: '5000'
            }
        ]
    }),
    getters: {
        filteredPrices: (state: PricesState, getters: any, rootState: any) => {
            const selectedCategory = rootState.sidebar.selectedCategory;
            if (!selectedCategory) {
                return state.pricesData;
            }
            return state.pricesData.filter((priceItem: Prices) => priceItem.category === selectedCategory);
        },
        uniqueCategories: (state: PricesState) => {
            const categories = new Set(state.pricesData.map((priceItem: Prices) => priceItem.category));
            return Array.from(categories).map((category, index) => ({
                id: index,
                category
            }));
        },
        shouldShowPagination: (state: PricesState, getters: any) => {
            const filteredPrices = getters.filteredPrices;
            return filteredPrices.length >= 15;
        }
    }
};