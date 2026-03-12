import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { postsApi } from './api'

export const postKeys = {
  all: ['posts'],
}

export const postsQueryOptions = queryOptions({
  queryKey: postKeys.all,
  queryFn: postsApi.getPosts,
})

export const usePosts = () => {
  return useSuspenseQuery(postsQueryOptions)
}
