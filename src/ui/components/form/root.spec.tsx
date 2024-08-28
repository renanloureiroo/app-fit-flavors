import { render, screen } from '@testing-library/react-native'

import { COLORS } from '@ui/styles/colors'

import { InputRoot } from './root'
import { Text } from '../text'

describe('ui/components/form/root', () => {
  it('should be able to render correctly', () => {
    render(
      <InputRoot>
        <Text>InputRoot</Text>
      </InputRoot>,
    )

    expect(screen.getByText('InputRoot')).toBeTruthy()
    expect(screen.getByTestId('input-root')).toBeTruthy()
    expect(screen.getByTestId('input-root')).toHaveProperty(
      'props.style',
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({ borderLeftWidth: 1 }),
          expect.objectContaining({
            borderLeftColor: COLORS.GREY[100],
          }),

          expect.objectContaining({ height: 56 }),
        ]),
      ]),
    )
  })

  it('should be able to render "focus" style', () => {
    render(
      <InputRoot status="focus">
        <Text>InputRoot</Text>
      </InputRoot>,
    )

    expect(screen.getByTestId('input-root')).toHaveProperty(
      'props.style',
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            borderTopColor: COLORS.BRAND.PRIMARY[400],
          }),
        ]),
      ]),
    )
  })
})
