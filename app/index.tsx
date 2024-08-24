import { StatusBar } from 'expo-status-bar'

import { Box } from '@ui/components/box'
import { Button } from '@ui/components/button'
import { Icon } from '@ui/components/icon'
import { Text } from '@ui/components/text'

const FitFlavors = () => {
  return (
    <Box className="bg-brand-primary-700 flex-1 items-center justify-center">
      <Text>Open up App.tsx to start working on your app!</Text>

      <Icon name="ArrowRight" className={'text-grey-100'} />
      <Box className="flex-row gap-4">
        <Button label="Continuar" className="flex-1" />
        <Button label="Continuar" className="flex-1" variant={'ghost'} />
      </Box>
      <StatusBar style="auto" />
    </Box>
  )
}

export { FitFlavors }
