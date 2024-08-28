# Box

O componente `Box` é um wrapper versátil para o `View` do React Native que suporta tanto `View` padrão quanto `Animated.View`, permitindo animações suaves.

## Importação

```tsx
import { Box, type BoxProps } from '@ui/components/box'
```

## Uso

O `Box` pode ser usado em qualquer lugar onde você usaria um `View` do React Native. A principal vantagem é a capacidade de alternar entre uma `View` padrão e uma `Animated.View` para animações.

### Uso com `View` padrão:

```tsx
import React from 'react'
import { Box } from '@ui/components/box'

export const Example = () => {
  return (
    <Box className="bg-gray-200 p-4 rounded-md">
      <Text>This is inside a Box component</Text>
    </Box>
  )
}
```

### Uso com `Animated.View`:

```tsx
import React from 'react'
import { Box } from '@ui/components/box'
import { useAnimatedStyle, withSpring } from 'react-native-reanimated'

export const Example = () => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(1.2) }],
    }
  })

  return (
    <Box animated className="bg-gray-200 p-4 rounded-md" style={animatedStyle}>
      <Text>This is inside an animated Box component</Text>
    </Box>
  )
}
```

## Props

### `BoxProps<T extends boolean>`

O `Box` aceita as seguintes propriedades:

- **`className`** (opcional): Uma string que permite a aplicação de classes utilitárias para estilização, utilizando o utilitário `cn`.
- **`children`** (opcional): Elementos filhos que serão renderizados dentro da `View`.
- **`animated`** (opcional): Se definido como `true`, o `Box` usará `Animated.View` em vez de `View`.

### Tipos Genéricos

- **`T`**: O tipo genérico `T` controla se o `Box` deve ser animado (`T = true`) ou não (`T = false`).

## Exemplos

### Exemplo 1: Caixa padrão com borda

```tsx
<Box className="border border-gray-300 p-4">
  <Text>Simple Box with a border</Text>
</Box>
```

### Exemplo 2: Caixa animada com fundo e cantos arredondados

```tsx
import { useAnimatedStyle, withSpring } from 'react-native-reanimated'

export const AnimatedBoxExample = () => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(1.2) }],
    }
  })

  return (
    <Box animated className="bg-blue-500 rounded-lg p-6" style={animatedStyle}>
      <Text style={{ color: 'white' }}>
        Box with background and rounded corners
      </Text>
    </Box>
  )
}
```

## Considerações

- O `Box` é útil para encapsular estilos comuns e reutilizáveis que você deseja aplicar a componentes `View` de maneira consistente.
- O suporte para `Animated.View` facilita a criação de animações sofisticadas sem sacrificar a simplicidade.
