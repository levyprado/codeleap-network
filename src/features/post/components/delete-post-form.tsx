import Button from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import { Loading03Icon } from '@hugeicons/core-free-icons'
import { toast } from 'sonner'
import { useDeletePost } from '../mutations'
import { usePostActionDialog } from './post-action-dialog'

type DeletePostFormProps = {
  postId: number
}

export default function DeletePostForm({ postId }: DeletePostFormProps) {
  const { close } = usePostActionDialog()
  const deletePostMutation = useDeletePost(postId)

  const handleDelete = () => {
    deletePostMutation.mutate(undefined, {
      onSuccess: () => {
        close()
        toast.success('Post deleted')
      },
      onError: () => {
        console.error('Failed to delete post')
      },
    })
  }

  return (
    <div className='flex justify-end gap-3'>
      <Button
        onClick={close}
        disabled={deletePostMutation.isPending}
        variant='outline'
        className='px-8'
      >
        Cancel
      </Button>
      <Button
        onClick={handleDelete}
        disabled={deletePostMutation.isPending}
        variant='destructive'
        className='px-8'
      >
        {deletePostMutation.isPending ? (
          <>
            <Icon icon={Loading03Icon} size={20} className='animate-spin' />
            Deleting...
          </>
        ) : (
          'Delete'
        )}
      </Button>
    </div>
  )
}
