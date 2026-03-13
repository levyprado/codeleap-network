import { POSTS_LIMIT } from '@/lib/constants'
import axios from 'axios'
import type { CreatePostPayload, PaginatedPostsResponse, Post } from './types'

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL

const api = axios.create({
  baseURL: API_URL,
})

export const postsApi = {
  getPosts: ({ offset = 0 }) =>
    api
      .get<PaginatedPostsResponse>('', {
        params: { limit: POSTS_LIMIT, offset },
      })
      .then((res) => res.data),

  createPost: (data: CreatePostPayload) =>
    api.post<Post>('', data).then((res) => res.data),

  updatePost: (id: number, data: Partial<CreatePostPayload>) =>
    api.patch(`${id}/`, data),

  deletePost: (id: number) => api.delete(`${id}/`),
}
