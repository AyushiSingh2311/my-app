export interface Products {
    id: number;
    img: string,
    name: string,
    description: string,
    price: string
}


export interface cardsProp {
    product: Products
    children: React.ReactNode
}

export interface cartState {
    cart: Array<Products>
}