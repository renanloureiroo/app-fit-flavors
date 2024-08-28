import { render, screen } from '@testing-library/react-native'

import { InputIcon } from './icon'

describe('ui/components/form/icon', () => {
  it('should be able to render correctly', () => {
    render(<InputIcon icon="Search" />)
  })

  it('should be able render "Touch" component as Wrapper when contain the onPress property', () => {
    render(<InputIcon onPress={() => {}} icon="Search" />)

    expect(screen.getByTestId('input-icon-press')).toBeTruthy()
  })
})
