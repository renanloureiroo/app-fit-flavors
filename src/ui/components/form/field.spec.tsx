import { render, screen } from '@testing-library/react-native'

import { COLORS } from '@ui/styles/colors'

import { Field } from './filed'

describe('ui/components/form/field', () => {
  it('should be able to render correctly', () => {
    render(<Field placeholder="Field component test" />)

    expect(screen.getByPlaceholderText('Field component test')).toBeTruthy()
    expect(screen.getByPlaceholderText('Field component test')).toHaveProperty(
      'props.placeholderTextColor',
      COLORS.GREY[300],
    )
    expect(screen.getByPlaceholderText('Field component test')).toHaveProperty(
      'props.style',
      expect.arrayContaining([
        expect.objectContaining({ color: COLORS.GREY[100] }),
        expect.objectContaining({ fontSize: 16 }),
        expect.objectContaining({ lineHeight: 20 }),
        expect.objectContaining({ fontWeight: '500' }),
      ]),
    )
  })
})
