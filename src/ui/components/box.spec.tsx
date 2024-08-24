import { render, screen } from '@testing-library/react-native'

import { Box } from './box'
import { Text } from './text'

describe('ui/components/box', () => {
  it('should be able to render with children', () => {
    render(
      <Box>
        <Text>Box</Text>
      </Box>,
    )

    expect(screen.getByText('Box')).toBeTruthy()
    expect(screen.getByTestId('box')).toBeTruthy()
  })

  it('should be able to render with className', () => {
    render(
      <Box className="h-10 w-10">
        <Text>Box</Text>
      </Box>,
    )

    const component = screen.getByTestId('box')

    expect(screen.getByText('Box')).toBeTruthy()

    expect(component).toHaveProperty(
      'props.style',
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({ height: 40 }),
          expect.objectContaining({ width: 40 }),
        ]),
      ]),
    )
  })

  it('should be able to render without children', () => {
    render(<Box />)

    expect(screen.queryByTestId('box'))
  })
})
