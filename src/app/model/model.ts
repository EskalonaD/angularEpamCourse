export interface ProductModel {
    name: string;
    amount: number;
    priceMin: number;
    priceMax: number;
    currency?: string;
    description?: string;
}
