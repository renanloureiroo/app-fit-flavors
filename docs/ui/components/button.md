# Button

O componente `Button` é um botão altamente customizável, construído sobre o componente `Pressable` do React Native. Ele utiliza `class-variance-authority` para aplicar variantes de estilo de forma dinâmica, facilitando a criação de botões consistentes com diferentes aparências e comportamentos.

## Importação

```tsx
import { Button, type ButtonProps } from '@ui/components/button'
```

## Uso

O `Button` pode ser usado em qualquer lugar onde você precise de um botão clicável. Ele oferece suporte a variantes que alteram o estilo visual do botão.

```tsx
import React from 'react'
import { Button } from '@ui/components/button'

export const Example = () => {
  return (
    <Button
      label="Click Me"
      variant="fill"
      onPress={() => console.log('Button Pressed')}
    />
  )
}
```

## Props

### `ButtonProps`

O `Button` aceita todas as propriedades padrão de um `Pressable` do React Native, através da interface `ComponentPropsWithoutRef<typeof Pressable>`. Além disso, ele suporta as seguintes props customizadas:

- **`label`** (obrigatório): Uma string que define o texto exibido dentro do botão.
- **`variant`** (opcional): Define o estilo visual do botão. Pode ser `fill` (padrão) ou `ghost`.

### Variantes

#### `variant`

- **`fill`**: Um botão com fundo preenchido.
- **`ghost`**: Um botão transparente com borda.

## Exemplos

### Exemplo 1: Botão preenchido

```tsx
<Button
  label="Submit"
  variant="fill"
  onPress={() => console.log('Submit Pressed')}
/>
```

### Exemplo 2: Botão fantasma

```tsx
<Button
  label="Cancel"
  variant="ghost"
  onPress={() => console.log('Cancel Pressed')}
/>
```

## Considerações

- O `Button` utiliza o `memo` para otimizar a renderização, evitando renders desnecessárias quando as props não mudam.
- A prop `variant` permite fácil customização do estilo do botão, mantendo a consistência visual no app.
