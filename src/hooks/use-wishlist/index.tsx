import { GameCardProps } from 'components/GameCard'
import { useQueryWishlist } from 'graphql/queries'
import { QueryWishlist_wishlists_games } from 'graphql/types'
import { useSession } from 'next-auth/client'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { gamesMapper } from 'utils/mappers'

type WishlistContextProps = {
  items?: GameCardProps[]
  loading?: boolean
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
}

export const WishlistContextDefaultValues = {
  items: [],
  loading: false,
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
}

export const WishlistContext = createContext<WishlistContextProps>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: ReactNode
}

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [session] = useSession()
  const [wishlistItems, setWishlistItems] = useState<
    QueryWishlist_wishlists_games[]
  >([])

  const { data, loading } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: { identifier: session?.user?.email as string },
  })

  useEffect(() => {
    setWishlistItems(data?.wishlists[0]?.games || [])
  }, [data])

  const isInWishlist = (id: string) =>
    !!wishlistItems.find((game) => game.id === id)

  const addToWishlist = (id: string) => null
  const removeFromWishlist = (id: string) => null

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(wishlistItems),
        loading,
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishliat = () => useContext(WishlistContext)

export { WishlistProvider, useWishliat }
