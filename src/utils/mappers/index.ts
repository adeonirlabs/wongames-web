import {
  QueryGames_games,
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight,
  QueryOrders_orders,
  QueryWishlist_wishlists_games,
} from 'graphql/types'
import { formatDate } from 'utils/formatters'

export const bannersMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    img: `http://localhost:1337${banner.image?.url}`,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.size,
    }),
  }))
}

export const singleGameMapper = (game: QueryGames_games) => {
  return {
    id: game.id,
    title: game.name,
    slug: game.slug,
    developer: game.developers[0].name,
    img: `http://localhost:1337${game.cover?.url}`,
    price: game.price,
  }
}

export const gamesMapper = (
  games: QueryGames_games[] | QueryWishlist_wishlists_games[] | null | undefined
) => {
  return games ? games.map((game) => singleGameMapper(game)) : []
}

export const highlightMapper = (
  highlight: QueryHome_sections_freeGames_highlight | null | undefined
) => {
  return highlight
    ? {
        title: highlight.title,
        subtitle: highlight.subtitle,
        backgroundImage: `http://localhost:1337${highlight.background?.url}`,
        floatImage: `http://localhost:1337${highlight.floatImage?.url}`,
        buttonLabel: highlight.buttonLabel,
        buttonLink: `${highlight.buttonLink}`,
        alignment: highlight.alignment,
      }
    : {}
}

export const cartMapper = (games: QueryGames_games[] | undefined) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price,
        title: game.name,
      }))
    : []
}

export const ordersMapper = (orders: QueryOrders_orders[] | undefined) => {
  return orders
    ? orders.map((order) => {
        return {
          id: order.id,
          paymentInfo: {
            flag: order.card_brand,
            img: order.card_brand ? `/img/cards/${order.card_brand}.png` : null,
            number: order.card_last4
              ? `**** **** **** ${order.card_last4}`
              : 'Free Game',
            purchaseDate: `Purchase made on ${formatDate(order.created_at)}`,
          },
          games: order.games.map((game) => ({
            id: game.id,
            title: game.name,
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: `http://localhost:1337${game.cover?.url}`,
            price: game.price,
          })),
        }
      })
    : []
}
