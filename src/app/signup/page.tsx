import Button from '@/components/ui/button'
import Card from '@/components/ui/card'
import Input from '@/components/ui/input'
import Label from '@/components/ui/label'

export default function SignupPage() {
  return (
    <>
      <Card title='Welcome to CodeLeap Network!'>
        <form className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2.5'>
            <Label>Please enter your username</Label>
            <Input placeholder='elonmusk' />
          </div>

          <Button className='mt-2'>Enter</Button>
        </form>
      </Card>
    </>
  )
}
