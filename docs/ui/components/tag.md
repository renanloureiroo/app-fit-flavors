# Tag

O componente `Tag` é um botão customizável que pode ser usado para selecionar ou destacar valores específicos. Ele utiliza `class-variance-authority` para aplicar variantes de estilo dinamicamente.

## Importação

```tsx
import { Tag, type TagProps } from '@ui/components/tag'
```

## Uso

O `Tag` pode ser usado em qualquer lugar onde você precise de um botão de seleção estilizado, como filtros ou categorias.

```tsx
import React from 'react'
import { Tag } from '@ui/components/tag'

export const Example = () => {
  return (
    <Tag
      label="Example Tag"
      value="example"
      variant="fill"
      onPress={(value) => console.log(value)}
    />
  )
}
```

## Props

### `TagProps`

O `Tag` aceita as seguintes propriedades:

- **`label`** (obrigatório): O texto exibido dentro da tag.
- **`value`** (obrigatório): O valor associado à tag, que é retornado quando a tag é pressionada.
- **`variant`** (opcional): Define o estilo visual da tag. Pode ser `fill` ou `ghost`.
- **`selected`** (opcional): Define se a tag está inicialmente selecionada.
- **`onPress`** (opcional): Função de callback executada quando a tag é pressionada, recebendo o `value` como argumento.

### Variantes

#### `variant`

- **`fill`**: Uma tag com fundo preenchido.
- **`ghost`**: Uma tag transparente com borda.

## Exemplos

### Exemplo 1: Tag preenchida

```tsx
<Tag
  label="Selected Tag"
  value="selected"
  variant="fill"
  onPress={(value) => console.log(value)}
/>
```

### Exemplo 2: Tag fantasma

```tsx
<Tag
  label="Unselected Tag"
  value="unselected"
  variant="ghost"
  onPress={(value) => console.log(value)}
/>
```

## Considerações

- O `Tag` utiliza um estado interno para gerenciar a seleção, o que permite alternar a seleção quando a tag é pressionada.
- A prop `variant` permite fácil customização do estilo da tag, mantendo a consistência visual no app.
