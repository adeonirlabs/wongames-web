import Link from 'next/link'

import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ username, email }: FormProfileProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="username"
        placeholder="Username"
        label="Username"
        initialValue={username}
      />

      <TextField
        name="email"
        type="email"
        placeholder="E-mail"
        initialValue={email}
        label="E-mail"
        disabled
      />

      <S.ButtonGroup>
        <Link href={`/forgot-password?email=${email}`} passHref>
          <Button size="medium" minimal>
            Reset password
          </Button>
        </Link>

        <Button size="medium">Save</Button>
      </S.ButtonGroup>
    </S.Form>
  </>
)

export default FormProfile
