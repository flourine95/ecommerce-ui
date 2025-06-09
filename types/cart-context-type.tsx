import {Product} from "@/types/product";

export type CartContextType = {
    cartItems: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (productId: number) => void
    updateQuantity: (productId: number, quantity: number) => void
    clearCart: () => void
    totalItems: number
    subtotal: number
}