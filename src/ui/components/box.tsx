import { forwardRef } from 'react'
import { View, ViewProps } from 'react-native'
import Animated, { AnimatedProps } from 'react-native-reanimated'

import { cn } from '@ui/styles/utils/cn'

type BaseBoxProps = {
  className?: string
  children?: React.ReactNode
}

type BoxProps<T extends boolean> = T extends true
  ? AnimatedProps<ViewProps> & BaseBoxProps & { animated: true }
  : ViewProps & BaseBoxProps & { animated?: false }

const Box = forwardRef<View, BoxProps<boolean>>((props, ref) => {
  const { className, children, animated = false, ...rest } = props

  if (animated) {
    return (
      <Animated.View
        testID="box"
        ref={ref}
        className={cn(className)}
        {...(rest as AnimatedProps<ViewProps>)}
      >
        {children}
      </Animated.View>
    )
  }

  return (
    <View
      testID="box"
      ref={ref}
      className={cn(className)}
      {...(rest as ViewProps)}
    >
      {children}
    </View>
  )
})

Box.displayName = 'Box'

export { Box, type BoxProps }
