import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartItem = {
  id: string
  name: string
  slug: string
  price: number
  imageUrl: string
  size?: string
  color?: string
  quantity: number
}

export type User = {
  name: string
  email: string
}

export type ShippingAddress = {
  fullName: string
  address: string
  city: string
  zipCode: string
  phone: string
}

export type PaymentDetails = {
  last4: string
}

export type Order = {
  id: string
  date: string
  total: number
  items: CartItem[]
  shippingAddress: ShippingAddress
  paymentDetails?: PaymentDetails
}

interface ShopState {
  cart: CartItem[]
  wishlist: string[] // Array of product slugs
  user: User | null
  orders: Order[]
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: string, size?: string, color?: string) => void
  incrementQuantity: (id: string, size?: string, color?: string) => void
  decrementQuantity: (id: string, size?: string, color?: string) => void
  clearCart: () => void
  toggleWishlist: (slug: string) => void
  login: (user: User) => void
  logout: () => void
  placeOrder: (total: number, shippingAddress: ShippingAddress, paymentDetails?: PaymentDetails) => void
}

export const useShopStore = create<ShopState>()(
  persist(
    (set) => ({
      cart: [],
      wishlist: [],
      user: null,
      orders: [],
      
      addToCart: (item) => set((state) => {
        const existingItem = state.cart.find(
          (c) => c.id === item.id && c.size === item.size && c.color === item.color
        )
        if (existingItem) {
          return {
            cart: state.cart.map((c) =>
              c.id === item.id && c.size === item.size && c.color === item.color
                ? { ...c, quantity: c.quantity + 1 }
                : c
            ),
          }
        }
        return { cart: [...state.cart, { ...item, quantity: 1 }] }
      }),

      removeFromCart: (id, size, color) => set((state) => ({
        cart: state.cart.filter((c) => !(c.id === id && c.size === size && c.color === color))
      })),

      incrementQuantity: (id, size, color) => set((state) => ({
        cart: state.cart.map((c) =>
          c.id === id && c.size === size && c.color === color
            ? { ...c, quantity: c.quantity + 1 }
            : c
        )
      })),

      decrementQuantity: (id, size, color) => set((state) => ({
        cart: state.cart.map((c) =>
          c.id === id && c.size === size && c.color === color
            ? { ...c, quantity: Math.max(1, c.quantity - 1) }
            : c
        )
      })),

      clearCart: () => set({ cart: [] }),

      toggleWishlist: (slug) => set((state) => ({
        wishlist: state.wishlist.includes(slug)
          ? state.wishlist.filter((w) => w !== slug)
          : [...state.wishlist, slug]
      })),

      login: (user) => set({ user }),
      
      logout: () => set({ user: null }),
      
      placeOrder: (total, shippingAddress, paymentDetails) => set((state) => {
        const newOrder = {
          id: `ORD-${Math.floor(Math.random() * 1000000)}`,
          date: new Date().toISOString(),
          total,
          items: [...state.cart],
          shippingAddress,
          ...(paymentDetails && { paymentDetails })
        }
        return {
          orders: [newOrder, ...state.orders],
          cart: [] // Clear cart after placing order
        }
      }),
    }),
    {
      name: 'fashionglam-store',
    }
  )
)
