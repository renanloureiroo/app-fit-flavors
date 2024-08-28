# Input

O componente `Input` é um campo de entrada de texto personalizável que oferece suporte para ícones à esquerda e à direita, além de funcionalidades como foco automático e integração com o sistema de campos (`Field`).

## Importação

```tsx
import { Input, type InputProps } from '@ui/components/form/input'
```

## Uso

O `Input` pode ser usado em qualquer lugar onde você precise de um campo de entrada de texto com ícones opcionais e estados de foco personalizados.

```tsx
import React from 'react'
import { Input } from '@ui/components/form/input'

export const Example = () => {
  return (
    <Input
      placeholder="Digite seu texto aqui"
      leftIcon={{
        icon: 'Search',
        onPress: () => console.log('Left icon pressed'),
      }}
      rightIcon={{
        icon: 'Clear',
        onPress: () => console.log('Right icon pressed'),
      }}
    />
  )
}
```

## Props

### `InputProps`

O `Input` aceita as seguintes propriedades:

- **`leftIcon`** (opcional): Um objeto contendo o ícone à esquerda e uma função de callback opcional para quando o ícone é pressionado.
  - **`icon`**: O nome do ícone a ser exibido.
  - **`onPress`**: Função chamada quando o ícone é pressionado.
- **`rightIcon`** (opcional): Um objeto contendo o ícone à direita e uma função de callback opcional para quando o ícone é pressionado.
  - **`icon`**: O nome do ícone a ser exibido.
  - **`onPress`**: Função chamada quando o ícone é pressionado.
- **`FieldProps`**: Todas as propriedades padrão do componente `Field`, que inclui propriedades comuns de um `TextInput`.

## Exemplos

### Exemplo 1: Campo de entrada com ícones à esquerda e à direita

```tsx
<Input
  placeholder="Search"
  leftIcon={{
    icon: 'Search',
    onPress: () => console.log('Search icon pressed'),
  }}
  rightIcon={{
    icon: 'Clear',
    onPress: () => console.log('Clear icon pressed'),
  }}
/>
```

### Exemplo 2: Campo de entrada simples sem ícones

```tsx
<Input placeholder="Enter your name" />
```

## Considerações

- O `Input` utiliza `useImperativeHandle` para expor as funções do `TextInput` nativo, permitindo o controle do foco e outras operações diretamente no componente pai.
- A adição de ícones facilita a criação de entradas de texto ricas em funcionalidades, como campos de busca ou senhas com botão de exibição de texto.
