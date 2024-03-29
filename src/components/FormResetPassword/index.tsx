import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'

import { Lock } from '@styled-icons/material-outlined'

import { FormError, FormLoading, FormWrapper } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import { FieldErrors, resetValidate } from 'utils/validations'

const FormResetPassword = () => {
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')
  const [values, setValues] = useState({ password: '', confirm_password: '' })
  const [loading, setLoading] = useState(false)

  const routes = useRouter()
  const { query } = routes

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = resetValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: query.code,
          password: values.password,
          passwordConfirmation: values.confirm_password,
        }),
      }
    )

    const data = await response.json()

    if (data.error) {
      setFormError(data.message[0].messages[0].message)
      setLoading(false)
    } else {
      signIn('credentials', {
        email: data.user.email,
        password: values.password,
        callbackUrl: '/',
      })
    }
  }

  const handleInput = (field: string, value: string) => {
    setValues((state) => ({ ...state, [field]: value }))
  }

  return (
    <FormWrapper>
      {!!formError && <FormError>{formError}</FormError>}

      <form onSubmit={handleSubmit}>
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError.password}
          onInputChange={(value) => handleInput('password', value)}
          icon={<Lock />}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          error={fieldError.confirm_password}
          onInputChange={(value) => handleInput('confirm_password', value)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth>
          {loading ? <FormLoading /> : 'Reset password'}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormResetPassword
