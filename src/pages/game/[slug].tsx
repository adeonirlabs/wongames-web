import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import GameTemplate, { GameTemplateProps } from 'templates/Game'

import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { getImageUrl } from 'utils/image'
import {
  QUERY_GAMES,
  QUERY_GAME_BY_SLUG,
  QUERY_RECOMMENDED,
  QUERY_UPCOMING,
} from 'graphql/queries'
import {
  QueryGames,
  QueryGamesVariables,
  QueryGameBySlug,
  QueryGameBySlugVariables,
  QueryRecommended,
  QueryUpcoming,
  QueryUpcomingVariables,
} from 'graphql/types'

const apolloClient = initializeApollo()
const TODAY = new Date().toISOString().slice(0, 10)

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return <GameTemplate {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 },
  })

  const paths = data.games.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache',
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  const [game] = data.games

  const { data: item } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  })

  const { data: upcoming } = await apolloClient.query<
    QueryUpcoming,
    QueryUpcomingVariables
  >({ query: QUERY_UPCOMING, variables: { date: TODAY } })

  return {
    revalidate: 60,
    props: {
      slug: params?.slug,
      cover: `${getImageUrl(game.cover?.url)}`,
      gameInfo: {
        id: game.id,
        title: game.name,
        price: game.price,
        description: game.short_description,
      },
      gallery: game.gallery.map(({ url, alternativeText }) => ({
        src: `${getImageUrl(url)}`,
        label: alternativeText ? alternativeText : game.name,
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map(({ name }) => name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map(({ name }) => name),
      },
      upcomingTitle: 'Upcoming',
      upcomingGames: gamesMapper(upcoming.upcomingGames),
      upcomingHighlight: highlightMapper(
        upcoming.showCase?.upcomingGames?.highlight
      ),
      recommendedTitle: item.recommended?.section?.title,
      recommendedGames: gamesMapper(item.recommended?.section?.games),
    },
  }
}
