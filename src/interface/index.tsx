export interface IProduct {
    id: number,
    image: {url: string},
    name: string,
    price: {formatted_with_symbol: string},
    description: string
}

export interface ICartItem {
    id: number,
    image: {url: string},
    name: string,
    price: {formatted_with_symbol: string},
    quantity: number
}

export interface ICart {
    line_items: ICartItem[],
    total_items: number,
    subtotal: {formatted_with_symbol: string}
}