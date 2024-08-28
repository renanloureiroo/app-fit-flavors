import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { TextInput } from 'react-native'

import { FieldProps, Field } from './filed'
import { InputIcon } from './icon'
import { InputRoot } from './root'
import { Icons } from '../icon'

type InputProps = FieldProps & {
  leftIcon?: {
    icon: Icons
    onPress?: () => void
  }
  rightIcon?: {
    icon: Icons
    onPress?: () => void
  }
}

const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const { leftIcon, rightIcon } = props
  const inputRef = useRef<TextInput>(null)

  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  const handlePressWrapper = useCallback(() => {
    inputRef.current?.focus()
    handleFocus()
  }, [handleFocus])

  useImperativeHandle(ref, () => inputRef.current!, [])

  return (
    <InputRoot
      status={isFocused ? 'focus' : props.status}
      onPress={handlePressWrapper}
    >
      {leftIcon && <InputIcon testID="input-icon-left" {...leftIcon} />}

      <Field
        ref={inputRef}
        {...props}
        onBlur={(e) => {
          handleBlur()
          props?.onBlur?.(e)
        }}
        onFocus={(e) => {
          handleFocus()
          props?.onFocus?.(e)
        }}
      />

      {rightIcon && <InputIcon testID="input-icon-right" {...rightIcon} />}
    </InputRoot>
  )
})

Input.displayName = 'Input'

export { Input, type InputProps }
