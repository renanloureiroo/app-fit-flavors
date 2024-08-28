import { Box } from '../box'
import { Icon, Icons } from '../icon'
import { Touch } from '../touch'

interface InputIconProps {
  onPress?: () => void
  icon: Icons
}

const InputIcon = ({ onPress, icon }: InputIconProps) => {
  const Wrapper = onPress ? Touch : Box

  return (
    <Wrapper onPress={onPress}>
      <Icon name={icon} />
    </Wrapper>
  )
}

export { InputIcon, type InputIconProps }
