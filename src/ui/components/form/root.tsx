import { ReactNode } from 'react'

import { cn } from '@ui/styles/utils/cn'

import { InputStatus } from './types'
import { Touch, TouchProps } from '../touch'

type InputRootProps = TouchProps & {
  children: ReactNode
  status?: InputStatus
}

const InputRoot = ({ children, status = 'default' }: InputRootProps) => {
  return (
    <Touch
      className={cn(
        'border border-grey-100 rounded-lg px-4 w-full flex items-center justify-center flex-row h-14 opacity-100',
        status === 'focus' && 'border-brand-primary-400',
      )}
    >
      {children}
    </Touch>
  )
}

export { InputRoot, type InputRootProps }
