import { forwardRef } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { COLORS } from '@ui/styles/colors'

import { InputStatus } from './types'

type FieldProps = TextInputProps & {
  status?: InputStatus
}

const Field = forwardRef<TextInput, FieldProps>((props, ref) => {
  const { status, ...rest } = props
  return (
    <TextInput
      testID="input-field"
      className="text-base leading-5 text-grey-100 font-medium flex-1 h-14 py-0 px-0"
      placeholderTextColor={COLORS.GREY[300]}
      textAlignVertical="top"
      style={{
        textAlignVertical: 'center',
      }}
      {...rest}
      ref={ref}
    />
  )
})

Field.displayName = 'Field'

export { Field, type FieldProps }
