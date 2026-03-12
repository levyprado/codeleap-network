'use client'

import FormField from '@/components/form-field'
import Button from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import Input from '@/components/ui/input'
import Textarea from '@/components/ui/textarea'
import { useAuthStore } from '@/features/auth/auth-store'
import { Dialog } from '@base-ui/react/dialog'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loading03Icon } from '@hugeicons/core-free-icons'
import { useForm } from 'react-hook-form'
import { useUpdatePost } from '../mutations'
import { CreatePostFormData, createPostSchema, Post } from '../types'
import { usePostActionDialog } from './post-action-dialog'

type EditPostFormProps = {
  post: Post
}

export default function EditPostForm({ post }: EditPostFormProps) {
  const { username } = useAuthStore()
  const { close } = usePostActionDialog()
  const updatePostMutation = useUpdatePost(post.id)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreatePostFormData>({
    resolver: zodResolver(createPostSchema),
    mode: 'onChange',
    defaultValues: { title: post.title, content: post.content },
  })

  const onSubmit = async (data: CreatePostFormData) => {
    if (username !== post.username) return

    try {
      await updatePostMutation.mutateAsync(data)
      close()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <FormField id='edit-title' label='Title' error={errors.title}>
        <Input
          id='edit-title'
          type='text'
          {...register('title')}
          aria-invalid={!!errors.title}
        />
      </FormField>
      <FormField id='edit-content' label='Content' error={errors.content}>
        <Textarea
          id='edit-content'
          {...register('content')}
          aria-invalid={!!errors.content}
        />
      </FormField>

      <div className='flex justify-end gap-3 pt-4'>
        <Dialog.Close
          render={<Button type='button' variant='outline' className='px-8' />}
        >
          Cancel
        </Dialog.Close>
        <Button
          type='submit'
          disabled={updatePostMutation.isPending || !isValid}
          className='px-8'
        >
          {updatePostMutation.isPending ? (
            <>
              <Icon icon={Loading03Icon} size={20} className='animate-spin' />
              Saving...
            </>
          ) : (
            'Save'
          )}
        </Button>
      </div>
    </form>
  )
}
