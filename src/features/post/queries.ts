import { POSTS_LIMIT } from '@/lib/constants'
import {
  infiniteQueryOptions,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query'
import { postsApi } from './api'

export const postKeys = {
  all: ['posts'],
}

export const postsInfiniteQueryOptions = infiniteQueryOptions({
  queryKey: postKeys.all,
  queryFn: ({ pageParam }) => postsApi.getPosts({ offset: pageParam }),
  initialPageParam: 0,
  getNextPageParam: (lastPage, allPages) => {
    if (!lastPage.next) return undefined

    return allPages.length * POSTS_LIMIT
  },
})

export const useInfinitePosts = () => {
  return useSuspenseInfiniteQuery(postsInfiniteQueryOptions)
}
