import { Info } from '@styled-icons/material-outlined/Info'

import BaseTemplate from 'templates/Base'

import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import CartList, { CartListProps } from 'components/CartList'
import Heading from 'components/Heading'
import PaymentForm from 'components/PaymentForm'
import ShowCase from 'components/ShowCase'

import * as S from './styles'

export type CartTemplateProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps

const CartTemplate = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
}: CartTemplateProps) => {
  return (
    <BaseTemplate>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        <S.Content>
          <CartList />

          <PaymentForm />
        </S.Content>

        <S.Text>
          <Info size={18} /> Your purchase is protected by a secure connection
          from the WON platform. By purchasing from our store you agree and
          agree to our <a href="#">terms of use.</a> After making the purchase
          you are entitled to a refund within a maximum of 30 days, without any
          additional cost, as long as the download of the purchased game has not
          occurred after your purchase.
        </S.Text>
        <Divider />
      </Container>

      <ShowCase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </BaseTemplate>
  )
}

export default CartTemplate
