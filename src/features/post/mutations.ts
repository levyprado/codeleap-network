import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postsApi } from './api'
import { postKeys } from './queries'

export const useCreatePost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: postsApi.createPost,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: postKeys.all })
    },
  })
}
