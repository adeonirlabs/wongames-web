/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
  ENUM_COMPONENTPAGERIBBON_COLOR,
  ENUM_COMPONENTPAGERIBBON_SIZE,
} from './globalTypes'

// ====================================================
// GraphQL fragment: BannerFragment
// ====================================================

export interface BannerFragment_image {
  url: string
}

export interface BannerFragment_button {
  label: string
  link: string
}

export interface BannerFragment_ribbon {
  text: string | null
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null
}

export interface BannerFragment {
  image: BannerFragment_image | null
  title: string
  subtitle: string
  button: BannerFragment_button | null
  ribbon: BannerFragment_ribbon | null
}
