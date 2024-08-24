import { cva, VariantProps } from 'class-variance-authority'
import { useCallback, useState } from 'react'
import { Pressable } from 'react-native'

import { cn } from '@ui/styles/utils/cn'

import { Text } from './text'

const tagVariants = cva(
  'rounded px-4 py-2 flex-row items-center justify-center',
  {
    variants: {
      variant: {
        fill: 'bg-brand-primary-700',
        ghost: 'bg-transparent border border-grey-100',
      },
    },
    defaultVariants: {
      variant: 'ghost',
    },
  },
)
interface TagProps extends VariantProps<typeof tagVariants> {
  label: string
  value: string
  selected?: boolean
  onPress?: (value: string) => void
}

const Tag = (props: TagProps) => {
  const { label, value, onPress, variant, selected: $selected = false } = props
  const [selected, setSelected] = useState(() => $selected)

  const toggle = useCallback(() => {
    setSelected((s) => !s)
  }, [])

  return (
    <Pressable
      testID="tag"
      onPress={() => {
        onPress?.(value)
        toggle()
      }}
      className={cn(tagVariants({ variant }), selected && 'bg-grey-100')}
    >
      <Text className={cn('text-grey-100', selected && 'text-grey-400')}>
        {label}
      </Text>
    </Pressable>
  )
}

export { Tag, type TagProps }
