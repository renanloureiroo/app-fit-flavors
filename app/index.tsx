import { StatusBar } from 'expo-status-bar'

import { Box } from '@ui/components/box'
import { Button } from '@ui/components/button'
import { Input } from '@ui/components/form/input'
import { Icon } from '@ui/components/icon'
import { Tag } from '@ui/components/tag'
import { Text } from '@ui/components/text'

const FitFlavors = () => {
  return (
    <Box className="bg-brand-primary-700 flex-1 items-center justify-center ">
      <Text>Open up App.tsx to start working on your app!</Text>
      <Input
        rightIcon={{
          icon: 'Search',
        }}
      />
      <Tag label="Fit Flavors" value="fit-flavors" />
      <Tag label="Fit Flavors" value="fit-flavors" variant={'fill'} />
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
