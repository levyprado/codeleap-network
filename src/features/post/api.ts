import axios from 'axios'
import type { CreatePostPayload, Post } from './types'

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL

const api = axios.create({
  baseURL: API_URL,
})

export const postsApi = {
  getPosts: () => api.get<{ results: Post[] }>('').then((res) => res.data),

  createPost: (data: CreatePostPayload) =>
    api.post<Post>('', data).then((res) => res.data),

  updatePost: (id: number, data: Partial<CreatePostPayload>) =>
    api.patch(`${id}/`, data),

  deletePost: (id: number) => api.delete(`${id}/`),
}
