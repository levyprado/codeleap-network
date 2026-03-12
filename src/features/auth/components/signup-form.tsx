'use client'

import FormField from '@/components/form-field'
import Button from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import Input from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loading03Icon } from '@hugeicons/core-free-icons'
import { useForm } from 'react-hook-form'
import { useAuthStore } from '../auth-store'
import { type SignupFormData, signupSchema } from '../types'

export default function SignupForm() {
  const { login } = useAuthStore()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
  })

  const onSubmit = (data: SignupFormData) => {
    login(data.username)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <FormField
        id='username'
        label='Please enter your username'
        error={errors.username}
        required
      >
        <Input
          id='username'
          type='text'
          placeholder='levyprado'
          autoComplete='username'
          required
          {...register('username')}
          aria-invalid={!!errors.username}
        />
      </FormField>

      <Button
        type='submit'
        disabled={isSubmitting || !isValid}
        className='mt-2'
      >
        {isSubmitting ? (
          <>
            <Icon icon={Loading03Icon} size={20} className='animate-spin' />
            Entering...
          </>
        ) : (
          'Enter'
        )}
      </Button>
    </form>
  )
}
