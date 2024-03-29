import { GetServerSidePropsContext } from 'next'

import ProfileTemplate from 'templates/Profile'

import FormProfile, { FormProfileProps } from 'components/FormProfile'

import { protectedRoutes } from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'

import { QueryProfileMe, QueryProfileMeVariables } from 'graphql/types'
import { QUERY_PROFILE_ME } from 'graphql/queries'

export default function Me(props: FormProfileProps) {
  return (
    <ProfileTemplate>
      <FormProfile {...props} />
    </ProfileTemplate>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  if (!session) {
    return { props: {} }
  }

  const { data } = await apolloClient.query<
    QueryProfileMe,
    QueryProfileMeVariables
  >({
    query: QUERY_PROFILE_ME,
    variables: {
      identifier: session?.id as string,
    },
  })

  return {
    props: {
      session,
      username: data.user?.username,
      email: data.user?.email,
    },
  }
}
