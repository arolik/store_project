
export interface ProductI  {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: RatingI;
}

interface RatingI {
    rate: number,
    count: number,
}

export interface TokenI {
    token: string
}

export interface CartProductI {
    product: ProductI,
    sum: number,
    count: number,
    id: number
}

export interface CountProductI {
    count: any,
    id: number,
    sum: number
}