/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateWishlistInput } from './globalTypes'

// ====================================================
// GraphQL mutation operation: MutationUpdateWishlist
// ====================================================

export interface MutationUpdateWishlist_updateWishlist_wishlist_user {
  id: string
  username: string
}

export interface MutationUpdateWishlist_updateWishlist_wishlist_games_cover {
  url: string
}

export interface MutationUpdateWishlist_updateWishlist_wishlist_games_developers {
  name: string
}

export interface MutationUpdateWishlist_updateWishlist_wishlist_games {
  id: string
  name: string
  slug: string
  cover: MutationUpdateWishlist_updateWishlist_wishlist_games_cover | null
  developers: MutationUpdateWishlist_updateWishlist_wishlist_games_developers[]
  price: number
}

export interface MutationUpdateWishlist_updateWishlist_wishlist {
  id: string
  user: MutationUpdateWishlist_updateWishlist_wishlist_user | null
  games: MutationUpdateWishlist_updateWishlist_wishlist_games[]
}

export interface MutationUpdateWishlist_updateWishlist {
  wishlist: MutationUpdateWishlist_updateWishlist_wishlist | null
}

export interface MutationUpdateWishlist {
  updateWishlist: MutationUpdateWishlist_updateWishlist | null
}

export interface MutationUpdateWishlistVariables {
  input: updateWishlistInput
}