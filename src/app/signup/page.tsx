import Card from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Label from '@/components/ui/label'

export default function SignupPage() {
  return (
    <main className='grid min-h-dvh place-items-center px-4'>
      <div className='fixed inset-0 z-0 bg-brand-glow opacity-30' />

      <Card title='Welcome to CodeLeap Network!'>
        <form className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2.5'>
            <Label>Please enter your username</Label>
            <Input placeholder='elonmusk' />
          </div>
        </form>
      </Card>
    </main>
  )
}
