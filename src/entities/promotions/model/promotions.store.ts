import { Promotions } from './promotions.types'

interface PromotionsState {
    PromotionsData: Promotions[];
}

export const promotionsModule = {
    namespaced: true,
    state: () => ({
        PromotionsData: <Promotions[]>[
            {
                id: 0,
                name: 'При 100% оплате скидка',
                imgPath: require('@/assets/images/promotion/implantation_1.png'),
                slug: 'qwe',
            },
            {
                id: 1,
                name: 'Собственная рассрочка',
                imgPath: require('@/assets/images/promotion/implantation_2.png'),
                slug: 'qwee',
            },
            {
                id: 2,
                name: '28 сентября',
                imgPath: require('@/assets/images/promotion/implantation_3.png'),
                slug: 'qqqq',
            },
            {
                id: 3,
                name: 'Выгодно',
                imgPath: require('@/assets/images/promotion/implantation_4.png'),
                slug: '123eq',
            },
            {
                id: 4,
                name: 'Удачные дни',
                imgPath: require('@/assets/images/promotion/implantation_5.png'),
                slug: '5tree',
            },

        ]
    }),
    getters: {
        getPromotionBySlug: (state: PromotionsState) => (slug: string) => {
            return state.PromotionsData.find(promotion => promotion.slug === slug);
        }
    }
};

