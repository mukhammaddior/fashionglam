import CartClient from './CartClient'

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <h1 className="text-3xl md:text-4xl font-light uppercase tracking-wider text-black mb-12">
        Shopping Cart
      </h1>
      <CartClient />
    </div>
  )
}
