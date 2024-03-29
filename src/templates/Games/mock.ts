import { QUERY_GAMES } from 'graphql/queries'

export const noGamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, where: {} },
  },
  result: {
    data: {
      games: [],
      gamesConnection: {
        values: [],
        __typename: 'GameConnection',
      },
    },
  },
}

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, where: {} },
  },
  result: {
    data: {
      games: [
        {
          id: '1',
          name: 'Mad Max',
          slug: 'mad-max',
          price: 518.39,
          developers: [{ name: 'Avalanche Studios' }],
          cover: {
            url: 'mad-max.jpg',
          },
          __typename: 'Game',
        },
      ],
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection',
      },
    },
  },
}

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, where: {}, start: 1 },
  },
  result: {
    data: {
      games: [
        {
          id: '2',
          name: 'Cyberpunk 2077',
          slug: 'cyberpunk-2077',
          price: 518.39,
          developers: [{ name: 'CD Projekt Red' }],
          cover: {
            url: 'cyber.jpg',
          },
          __typename: 'Game',
        },
      ],
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection',
      },
    },
  },
}
