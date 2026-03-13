import * as z from 'zod'

export type Post = {
  id: number
  username: string
  created_datetime: string
  title: string
  content: string
}

export type PaginatedPostsResponse = {
  count: number
  next: string | null
  previous: string | null
  results: Post[]
}

export const createPostSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(100, 'Title must be less than 100 characters'),
  content: z
    .string()
    .min(1, 'Content is required')
    .max(500, 'Content must be less than 300 characters'),
})

export type CreatePostFormData = z.infer<typeof createPostSchema>

export type CreatePostPayload = CreatePostFormData & { username: string }
