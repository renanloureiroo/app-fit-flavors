import { memo } from 'react'
import { ActivityIndicator } from 'react-native'

type Size = 'sm' | 'md' | 'lg'

const sizePreset: Record<Size, number> = {
  sm: 24,
  md: 40,
  lg: 60,
}

type LoaderProps = {
  size?: Size
}

const Loader = memo((props: LoaderProps) => {
  const { size = 'md' } = props
  return <ActivityIndicator testID={`loader-${size}`} size={sizePreset[size]} />
})

Loader.displayName = 'Loader'

export { Loader, type LoaderProps }
