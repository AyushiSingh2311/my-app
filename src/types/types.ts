export interface Products {
    id: number;
    img: string,
    name: string,
    description: string,
    price: string
}


export interface cartState {
    cart: Array<Products>
}