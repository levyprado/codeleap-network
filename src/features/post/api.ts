import axios from 'axios'
import { CreatePostPayload } from './types'

const API_URL = process.env.API_BASE_URL

const api = axios.create({
  baseURL: API_URL,
})

export const postsApi = {
  getPosts: () => api.get(''),
  createPost: (data: CreatePostPayload) => api.post('', data),
  updatePost: (id: number, data: Partial<CreatePostPayload>) =>
    api.patch(`${id}/`, data),
  deletePost: (id: number) => api.delete(`${id}/`),
}
