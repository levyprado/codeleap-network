import CreatePostForm from '@/components/post/create-post-form'
import PostItem from '@/components/post/post-item'

export default function HomePage() {
  return (
    <div className='mx-auto flex h-[95dvh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border'>
      <header className='bg-brand px-6 py-4'>
        <h1 className='text-xl font-bold text-balance text-white'>
          CodeLeap Network
        </h1>
      </header>

      <div className='flex flex-1 flex-col gap-12 overflow-hidden bg-card px-4 py-6 md:px-8'>
        <CreatePostForm />

        <section className='custom-scrollbar flex flex-1 flex-col gap-6 overflow-y-auto pr-2'>
          {[...Array(10).keys()].map((i) => (
            <PostItem
              key={i}
              title='My First Post at CodeLeap Network!'
              username='Victor'
              content='Lorem ipsum dolor sit amet consectetur adipisicing elit...'
              timeAgo='25m'
            />
          ))}
        </section>
      </div>
    </div>
  )
}
