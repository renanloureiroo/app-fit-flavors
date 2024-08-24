import { render, screen } from '@testing-library/react-native'

import { COLORS } from '@ui/styles/colors'

import { Tag } from './tag'

describe('ui/components/tag', () => {
  it('should be render correctly', () => {
    render(<Tag label="Fit Flavors" value="fit-flavors" />)

    expect(screen.getByText('Fit Flavors')).toBeTruthy()
  })

  it("should be able render a tag with 'fill' variant", () => {
    render(<Tag label="Fit Flavors" value="fit-flavors" variant={'fill'} />)

    expect(screen.getByTestId('tag')).toHaveProperty(
      'props.style',
      expect.arrayContaining([
        expect.objectContaining({ backgroundColor: COLORS.BRAND.PRIMARY[700] }),
      ]),
    )
  })

  it("should be able render a tag with 'ghost' variant", () => {
    render(<Tag label="Fit Flavors" value="fit-flavors" variant={'ghost'} />)

    expect(screen.getByTestId('tag')).toHaveProperty(
      'props.style',
      expect.arrayContaining([
        expect.objectContaining({ borderLeftColor: COLORS.GREY[100] }),
      ]),
    )
  })
})
