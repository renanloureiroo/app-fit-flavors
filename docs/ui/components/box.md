# Box

O componente `Box` é um wrapper simples em torno do componente `View` do React Native, permitindo a aplicação de classes utilitárias usando o utilitário `cn` para facilitar a composição de estilos.

## Importação

```tsx
import { Box, type BoxProps } from '@ui/components/box'
```

## Uso

O `Box` pode ser usado em qualquer lugar onde você usaria um `View` do React Native. A principal vantagem é a capacidade de aplicar classes utilitárias de forma mais conveniente.

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

## Props

### `BoxProps`

O `Box` aceita todas as propriedades padrão de um `View` do React Native, através da interface `ViewProps`. Além disso, o `Box` tem suporte para a seguinte custom prop:

- **`className`** (opcional): Uma string que permite a aplicação de classes utilitárias para estilização, utilizando o utilitário `cn`.

### `forwardRef`

O `Box` utiliza o `forwardRef` do React, permitindo que você passe uma referência ao `View` interno, caso precise acessá-lo diretamente.

## Exemplos

### Exemplo 1: Caixa simples com borda

```tsx
<Box className="border border-gray-300 p-4">
  <Text>Simple Box with a border</Text>
</Box>
```

### Exemplo 2: Caixa com fundo e cantos arredondados

```tsx
<Box className="bg-blue-500 rounded-lg p-6">
  <Text style={{ color: 'white' }}>
    Box with background and rounded corners
  </Text>
</Box>
```

## Considerações

- O `Box` é útil para encapsular estilos comuns e reutilizáveis que você deseja aplicar a componentes `View` de maneira consistente.
- A prop `className` é altamente flexível, permitindo o uso de utilitários de estilização com Tailwind CSS (via NativeWind, por exemplo) ou outros sistemas de classes utilitárias.
