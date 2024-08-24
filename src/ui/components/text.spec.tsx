import { render, screen } from '@testing-library/react-native'

import { COLORS } from '@ui/styles/colors'

import { Text } from './text'

describe('ui/components/text', () => {
  it('should be able to render with children', () => {
    render(<Text>Text</Text>)

    expect(screen.getByText('Text')).toBeTruthy()
  })

  it('should be able render with default styles', () => {
    render(<Text>Text</Text>)

    const component = screen.getByText('Text')

    expect(component).toHaveProperty(
      'props.style',
      expect.arrayContaining([
        expect.objectContaining({ color: COLORS.GREY[100] }),
        expect.objectContaining({ fontSize: 16 }),
      ]),
    )
  })

  it('should be able to render with className', () => {
    render(<Text className="text-2xl">Text</Text>)

    const component = screen.getByText('Text')

    expect(component).toHaveProperty(
      'props.style',
      expect.arrayContaining([
        expect.arrayContaining([expect.objectContaining({ fontSize: 24 })]),
      ]),
    )
  })
})
