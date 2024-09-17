import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Shopping Page',
  description: 'un simple contador'
}

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos del carrito</span>
      <CartCounter value={10}/>
    </div>
  )
}