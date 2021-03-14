import { Button, Heading, Ribbon } from 'components'

import {
  AddShoppingCart,
  FavoriteBorder,
} from '@styled-icons/material-outlined'

import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

export const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.GameInfoContainer>
    <Heading color="black" lineColor="secondary" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{`$${price}`}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonGroup>
      <Button icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>
      <Button icon={<FavoriteBorder />} size="large" variant="ghost">
        Wishlist
      </Button>
    </S.ButtonGroup>
  </S.GameInfoContainer>
)
