import { useCallback, useState } from 'react'
import { Pressable, PressableProps } from 'react-native'

import { cn } from '@ui/styles/utils/cn'

type TouchProps = PressableProps & {}

const Touch = ({ onPressIn, onPressOut, ...rest }: TouchProps) => {
  const [isPressed, setIsPressed] = useState(false)
  const handlePressIn = useCallback(() => {
    setIsPressed(true)
  }, [])

  const handlePressOut = useCallback(() => {
    setIsPressed(false)
  }, [])

  return (
    <Pressable
      testID="touch"
      className={cn(isPressed && 'opacity-70')}
      {...rest}
      onPressIn={(e) => {
        handlePressIn()
        onPressIn?.(e)
      }}
      onPressOut={(e) => {
        handlePressOut()
        onPressOut?.(e)
      }}
    />
  )
}

export { Touch, type TouchProps }
