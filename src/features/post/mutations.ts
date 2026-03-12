import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postsApi } from './api'
import { postKeys } from './queries'
import { CreatePostPayload } from './types'

export const useCreatePost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: postsApi.createPost,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: postKeys.all })
    },
  })
}

export const useUpdatePost = (id: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: Partial<CreatePostPayload>) =>
      postsApi.updatePost(id, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: postKeys.all })
    },
  })
}
