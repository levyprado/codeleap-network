import Header from '@/components/header'
import CreatePostForm from '@/components/post/create-post-form'
import FeedControls from '@/components/post/feed-controls'
import PostList from '@/components/post/post-list'

export default function HomePage() {
  return (
    <div className='mx-auto flex h-[95dvh] w-full max-w-3xl animate-slide-up flex-col overflow-hidden rounded-xl border'>
      <Header />

      <div className='flex flex-1 flex-col overflow-hidden bg-card'>
        <div className='px-4 pt-6 pb-4 md:px-8'>
          <CreatePostForm />
        </div>

        <FeedControls />

        <PostList />
      </div>
    </div>
  )
}
