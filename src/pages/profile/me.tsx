import { GetServerSidePropsContext } from 'next'

import ProfileTemplate from 'templates/Profile'

import FormProfile from 'components/FormProfile'

import { protectedRoutes } from 'utils/protected-routes'

export default function Me() {
  return (
    <ProfileTemplate>
      <FormProfile />
    </ProfileTemplate>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: { session },
  }
}
