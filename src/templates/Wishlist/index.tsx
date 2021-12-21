import BaseTemplate from 'templates/Base'

import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { Grid } from 'components/Grid'
import { HighlightProps } from 'components/Highlight'
import Empty from 'components/Empty'
import GameCard, { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import ShowCase from 'components/ShowCase'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const WishlistTemplate = ({
  games = [],
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
}: WishlistTemplateProps) => (
  <BaseTemplate>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games.length ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          hasLink
        />
      )}

      <Divider />
    </Container>

    <ShowCase
      title={recommendedTitle}
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </BaseTemplate>
)

export default WishlistTemplate
