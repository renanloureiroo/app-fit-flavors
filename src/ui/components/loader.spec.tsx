import { render, screen } from '@testing-library/react-native'

import { Loader } from './loader'

describe('ui/components/loader', () => {
  it('should be render with "md" size default', () => {
    render(<Loader />)

    expect(screen.getByTestId('loader-md')).toBeTruthy()
  })

  it('should be render with "sm" size', () => {
    render(<Loader size="sm" />)

    expect(screen.getByTestId('loader-sm')).toBeTruthy()
  })

  it('should be render with "lg" size', () => {
    render(<Loader size="lg" />)

    expect(screen.getByTestId('loader-lg')).toBeTruthy()
  })
})
