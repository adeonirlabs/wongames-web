import { useQueryGames } from 'graphql/queries'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { formatPrice } from 'utils/formatters'
import { getStorageItem } from 'utils/storage'

type CartItem = {
  id: string
  img: string
  price: string
  title: string
}

type CartContextType = {
  items: CartItem[]
}

const CartContextDefaultValues = {
  items: [],
}

const CartContext = createContext<CartContextType>(CartContextDefaultValues)

export type CartProviderProps = {
  children: ReactNode
}

const CART_KEY = 'cartItem'

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  const { data } = useQueryGames({
    skip: !cartItems?.length,
    variables: {
      where: {
        id: cartItems,
      },
    },
  })

  return (
    <CartContext.Provider
      value={{
        items: data?.games.map((game) => ({
          id: game.id,
          img: `http://localhost:1337${game.cover?.url}`,
          price: formatPrice(game.price),
          title: game.name,
        })),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
