
export type Varients = [
    {
        type: string,
        value: string
    }
]


export interface ProductInterface {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: Varients[];
    inventory: {
        quantity: number,
        inStock: boolean
    }



}


