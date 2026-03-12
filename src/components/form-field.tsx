import { type FieldError } from 'react-hook-form'
import Label from './ui/label'

type FormFieldProps = {
  label: string
  id: string
  error: FieldError | undefined
  required?: boolean
  children: React.ReactNode
}

export default function FormField({
  label,
  id,
  error,
  required,
  children,
}: FormFieldProps) {
  return (
    <div className='flex flex-col gap-2.5'>
      <Label htmlFor={id}>
        {label} {required && <span className='text-destructive'>*</span>}
      </Label>

      {children}

      {error && (
        <span className='animate-slide-up text-sm font-medium text-destructive'>
          {error.message}
        </span>
      )}
    </div>
  )
}
