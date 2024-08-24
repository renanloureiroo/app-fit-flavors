import { type VariantProps, cva } from 'class-variance-authority'
import { memo, useState } from 'react'
import { Pressable, Text } from 'react-native'

import { cn } from '@ui/styles/utils/cn'

const buttonVariants = cva(
  'w-full min-h-10 p-3 flex-row items-center justify-center rounded-lg',
  {
    variants: {
      variant: {
        fill: 'bg-brand-primary-300',
        ghost: 'bg-transparent border border-grey-100',
      },
    },
    defaultVariants: {
      variant: 'fill',
    },
  },
)

const buttonTextVariants = cva('text-sm font-medium text-center', {
  variants: {
    variant: {
      fill: 'text-grey-400',
      ghost: 'text-grey-100',
    },
  },
  defaultVariants: {
    variant: 'fill',
  },
})

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof Pressable>,
    VariantProps<typeof buttonVariants> {
  label: string
}

const Button = memo(
  ({ label, className, variant = 'fill', disabled, ...rest }: ButtonProps) => {
    const isFill = variant === 'fill'
    const [isPressed, setIsPressed] = useState(false)

    const pressedClassName = isFill ? 'bg-brand-primary-500' : 'bg-grey-100/10'
    const disabledClassName = isFill
      ? 'opacity-30 bg-grey-100/70'
      : 'opacity-30'

    return (
      <Pressable
        testID="button"
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        className={cn(
          buttonVariants({ variant, className }),
          isPressed && pressedClassName,
          disabled && disabledClassName,
        )}
        disabled={disabled}
        {...rest}
      >
        <Text
          testID="button-label"
          className={cn(buttonTextVariants({ variant }))}
        >
          {label}
        </Text>
      </Pressable>
    )
  },

  (prevState, nextState) => {
    return (
      prevState.label === nextState.label &&
      prevState.onPress === nextState.onPress &&
      prevState.className === nextState.className
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants, buttonTextVariants }
