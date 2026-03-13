'use client'

import FormField from '@/components/form-field'
import Button from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import IconButton from '@/components/ui/icon-button'
import Input from '@/components/ui/input'
import Textarea from '@/components/ui/textarea'
import { useAuthStore } from '@/features/auth/auth-store'
import { zodResolver } from '@hookform/resolvers/zod'
import { ImageIcon, Loading03Icon } from '@hugeicons/core-free-icons'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useCreatePost } from '../mutations'
import { CreatePostFormData, createPostSchema } from '../types'

export default function CreatePostForm() {
  const { username } = useAuthStore()
  const createPostMutation = useCreatePost()

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isValid },
  } = useForm<CreatePostFormData>({
    resolver: zodResolver(createPostSchema),
    mode: 'onChange',
    defaultValues: { title: '', content: '' },
  })

  const onSubmit = (data: CreatePostFormData) => {
    if (!username) return

    createPostMutation.mutate(
      { ...data, username },
      {
        onSuccess: () => {
          resetField('title')
          resetField('content')

          toast.success('Post created')
        },
        onError: () => {
          toast.error('Failed to create post')
        },
      },
    )
  }

  return (
    <div className='flex shrink-0 flex-col gap-4'>
      <h2 className='text-xl font-semibold text-balance md:text-3xl'>
        What&apos;s on your mind?
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <FormField id='title' label='Title' error={errors.title}>
          <Input
            id='title'
            type='text'
            placeholder='How to join CodeLeap'
            aria-invalid={!!errors.title}
            {...register('title')}
          />
        </FormField>
        <FormField id='content' label='Content' error={errors.content}>
          <Textarea
            id='content'
            placeholder='Create a good project in the challenge and...'
            aria-invalid={!!errors.content}
            {...register('content')}
          />
        </FormField>

        <div className='flex items-center justify-between pt-2'>
          <IconButton
            type='button'
            icon={ImageIcon}
            aria-label='Attach Image'
          />

          <Button
            type='submit'
            disabled={createPostMutation.isPending || !isValid}
            className='ml-auto px-8'
          >
            {createPostMutation.isPending ? (
              <>
                <Icon icon={Loading03Icon} size={20} className='animate-spin' />
                Creating...
              </>
            ) : (
              'Create Post'
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
