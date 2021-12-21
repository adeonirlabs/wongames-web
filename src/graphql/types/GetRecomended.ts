/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from './globalTypes'

// ====================================================
// GraphQL query operation: GetRecomended
// ====================================================

export interface GetRecomended_recommended_section_highlight_background {
  __typename: 'UploadFile'
  url: string
}

export interface GetRecomended_recommended_section_highlight_floatImage {
  __typename: 'UploadFile'
  url: string
}

export interface GetRecomended_recommended_section_highlight {
  __typename: 'ComponentPageHighlight'
  title: string
  subtitle: string
  background: GetRecomended_recommended_section_highlight_background | null
  floatImage: GetRecomended_recommended_section_highlight_floatImage | null
  buttonLabel: string
  buttonLink: string
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null
}

export interface GetRecomended_recommended_section_games_cover {
  __typename: 'UploadFile'
  url: string
}

export interface GetRecomended_recommended_section_games_developers {
  __typename: 'Developer'
  name: string
}

export interface GetRecomended_recommended_section_games {
  __typename: 'Game'
  name: string
  slug: string
  cover: GetRecomended_recommended_section_games_cover | null
  developers: GetRecomended_recommended_section_games_developers[]
  price: number
}

export interface GetRecomended_recommended_section {
  __typename: 'ComponentPagePopularGames'
  title: string
  highlight: GetRecomended_recommended_section_highlight | null
  games: GetRecomended_recommended_section_games[]
}

export interface GetRecomended_recommended {
  __typename: 'Recommended'
  section: GetRecomended_recommended_section | null
}

export interface GetRecomended {
  recommended: GetRecomended_recommended | null
}
