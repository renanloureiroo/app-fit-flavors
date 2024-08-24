import { render, screen } from '@testing-library/react-native'

import { COLORS } from '@ui/styles/colors'

import { Icon } from './icon'

describe('ui/components/icon.tsx', () => {
  it('should be able render with default styles', () => {
    render(<Icon name="ArrowRight" />)

    const icon = screen.getByTestId('icon')

    expect(icon).toHaveProperty(
      'props.style',
      expect.arrayContaining([
        expect.objectContaining({ color: COLORS.BRAND.PRIMARY[400] }),
      ]),
    )
  })

  it('should be able render with custom styles', () => {
    render(<Icon name="ArrowRight" className="text-grey-100" />)

    const icon = screen.getByTestId('icon')

    expect(icon).toHaveProperty(
      'props.style',
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({ color: COLORS.GREY[100] }),
        ]),
      ]),
    )
  })
})
