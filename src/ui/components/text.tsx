import { forwardRef, memo } from 'react'
import { Text as RNText, TextProps as RNTextProps } from 'react-native'

import { cn } from '@ui/styles/utils/cn'

type TextProps = RNTextProps

const Text = memo(
  forwardRef<RNText, TextProps>((props, ref) => {
    const { className, ...rest } = props
    return (
      <RNText
        ref={ref}
        className={cn('text-grey-100 text-base', className)}
        {...rest}
      />
    )
  }),
  (prevProps, nextProps) => {
    return (
      prevProps.children === nextProps.children &&
      prevProps.className === nextProps.className
    )
  },
)

Text.displayName = 'Text'

export { Text }
