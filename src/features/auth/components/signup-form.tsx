'use client'

import Button from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import Input from '@/components/ui/input'
import Label from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loading03Icon } from '@hugeicons/core-free-icons'
import { useForm } from 'react-hook-form'
import { type SignupFormData, signupSchema } from '../types'

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: 'onTouched',
  })

  const onSubmit = async (data: SignupFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2.5'>
        <Label htmlFor='username'>
          Please enter your username <span className='text-destructive'>*</span>
        </Label>
        <Input
          id='username'
          type='text'
          placeholder='levyprado'
          autoComplete='username'
          required
          {...register('username')}
          aria-invalid={!!errors.username}
        />
        {errors.username && (
          <span className='animate-slide-up text-sm font-medium text-destructive'>
            {errors.username.message}
          </span>
        )}
      </div>

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
