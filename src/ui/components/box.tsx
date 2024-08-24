import { forwardRef } from 'react'
import { View, ViewProps } from 'react-native'

import { cn } from '@ui/styles/utils/cn'

type BoxProps = ViewProps

const Box = forwardRef<View, BoxProps>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <View testID="box" ref={ref} className={cn(className)} {...rest}>
      {children}
    </View>
  )
})

Box.displayName = 'Box'

export { Box, type BoxProps }
