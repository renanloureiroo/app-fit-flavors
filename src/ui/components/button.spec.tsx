import { act, fireEvent, render, screen } from '@testing-library/react-native'

import { COLORS } from '@ui/styles/colors'

import { Button } from './button'

describe('ui/components/button', () => {
  it('should be able to render label', () => {
    render(<Button label="next" />)

    expect(screen.getByText('next')).toBeTruthy()
  })

  it("should be able to render with className='h-10 w-10'", () => {
    render(<Button label="next" className="h-10 w-40" />)

    const component = screen.getByTestId('button')

    expect(component).toHaveProperty(
      'props.style',

      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            height: 40,
          }),
          expect.objectContaining({
            width: 160,
          }),
        ]),
      ]),
    )
  })

  it('should be able to render default variant', () => {
    render(<Button label="next" />)

    const component = screen.getByTestId('button')
    const label = screen.getByTestId('button-label')

    expect(component).toHaveProperty(
      'props.style',
      expect.arrayContaining([
        expect.objectContaining({
          backgroundColor: COLORS.BRAND.PRIMARY[300],
        }),
      ]),
    )

    expect(label).toHaveProperty(
      'props.style',
      expect.arrayContaining([
        expect.objectContaining({ color: COLORS.GREY[400] }),
      ]),
    )
  })

  it('should be able to render ghost variant', () => {
    render(<Button label="next" variant="ghost" />)

    const component = screen.getByTestId('button')
    const label = screen.getByTestId('button-label')

    expect(component).toHaveProperty(
      'props.style',

      expect.arrayContaining([
        expect.objectContaining({
          borderTopColor: COLORS.GREY[100],
          borderRightColor: COLORS.GREY[100],
          borderBottomColor: COLORS.GREY[100],
          borderLeftColor: COLORS.GREY[100],
        }),
      ]),
    )

    expect(label).toHaveProperty(
      'props.style',
      expect.arrayContaining([
        expect.objectContaining({ color: COLORS.GREY[100] }),
      ]),
    )
  })

  it('should be able not call onPress when disabled', async () => {
    const onPress = jest.fn()
    render(<Button label="next" onPress={onPress} disabled />)

    await act(async () => {
      fireEvent.press(screen.getByTestId('button'))
    })

    expect(onPress).not.toHaveBeenCalled()
  })

  it('should be able to call onPress when not disabled', async () => {
    const onPress = jest.fn()
    render(<Button label="next" onPress={onPress} />)

    await act(async () => {
      fireEvent.press(screen.getByTestId('button'))
    })

    expect(onPress).toHaveBeenCalled()
  })
})
