import { Box } from '../box'
import { Icon, Icons } from '../icon'
import { Touch } from '../touch'

interface InputIconProps {
  onPress?: () => void
  icon: Icons
  testID?: string
}

const InputIcon = ({ onPress, icon, ...rest }: InputIconProps) => {
  const Wrapper = onPress ? Touch : Box

  return (
    <Wrapper
      testID={onPress ? 'input-icon-press' : 'input-icon'}
      onPress={onPress}
      className={'justify-center items-center'}
      {...rest}
    >
      <Icon name={icon} />
    </Wrapper>
  )
}

export { InputIcon, type InputIconProps }
