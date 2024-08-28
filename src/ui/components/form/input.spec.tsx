import { render, screen } from '@testing-library/react-native'

import { Input } from './input'

describe('ui/components/form/input', () => {
  it('should be able to render correctly', () => {
    render(<Input placeholder="Test" />)

    expect(screen.getByPlaceholderText('Test')).toBeTruthy()
    expect(screen.getByTestId('input-root')).toBeTruthy()
    expect(screen.getByTestId('input-field')).toBeTruthy()
  })

  it('should be able to render with left icon', () => {
    render(
      <Input
        leftIcon={{
          icon: 'Search',
        }}
        placeholder="Test"
      />,
    )

    expect(screen.getAllByTestId('input-icon-left')).toHaveLength(1)
  })

  it('should be able to render with right icon', () => {
    render(
      <Input
        rightIcon={{
          icon: 'Search',
        }}
        placeholder="Test"
      />,
    )

    expect(screen.getAllByTestId('input-icon-right')).toHaveLength(1)
  })

  it('should be able to render with left and right icon', () => {
    render(
      <Input
        leftIcon={{
          icon: 'Search',
        }}
        rightIcon={{
          icon: 'Search',
        }}
        placeholder="Test"
      />,
    )

    expect(screen.getAllByTestId('input-icon-left')).toHaveLength(1)
    expect(screen.getAllByTestId('input-icon-right')).toHaveLength(1)
  })
})
