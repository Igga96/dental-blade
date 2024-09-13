import { Prices } from './price.types';

export function sortPricesByCategory(pricesData?: Prices[]): Record<string, Prices[]> {
    if (!pricesData) {
        return {};
    }

    return pricesData.reduce((acc, price) => {
        if (!acc[price.category]) {
            acc[price.category] = [];
        }
        acc[price.category].push(price);
        return acc;
    }, {} as Record<string, Prices[]>);
}
