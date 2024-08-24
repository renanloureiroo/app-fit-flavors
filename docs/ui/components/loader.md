# Loader

O componente `Loader` é um indicador de carregamento simples que utiliza o `ActivityIndicator` do React Native. Ele permite definir diferentes tamanhos predefinidos para o indicador de atividade.

## Importação

```tsx
import { Loader, type LoaderProps } from '@ui/components/loader'
```

## Uso

O `Loader` pode ser usado em qualquer lugar onde você precise de um indicador de carregamento, como durante o carregamento de dados ou enquanto aguarda uma operação assíncrona ser concluída.

```tsx
import React from 'react'
import { Loader } from '@ui/components/loader'

export const Example = () => {
  return <Loader size="md" />
}
```

## Props

### `LoaderProps`

O `Loader` aceita as seguintes propriedades:

- **`size`** (opcional): Define o tamanho do indicador de carregamento. Pode ser `sm` (24), `md` (40 - padrão), ou `lg` (60).

## Tamanhos Disponíveis

A seguir estão os tamanhos disponíveis para o `Loader`:

- **`sm`**: 24px
- **`md`**: 40px (padrão)
- **`lg`**: 60px

## Exemplos

### Exemplo 1: Indicador de carregamento médio (padrão)

```tsx
<Loader size="md" />
```

### Exemplo 2: Indicador de carregamento grande

```tsx
<Loader size="lg" />
```

## Considerações

- O `Loader` é útil para indicar ao usuário que uma operação está em andamento, especialmente em interfaces assíncronas.
- O uso do `memo` otimiza a renderização do componente, evitando renders desnecessárias.
