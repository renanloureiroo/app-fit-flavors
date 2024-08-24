# Icon

O componente `Icon` é um wrapper para exibir ícones SVG no aplicativo React Native, permitindo a seleção de ícones com base em um nome passado como prop.

## Importação

```tsx
import { Icon, type Icons } from '@ui/components/icon'
```

## Uso

O `Icon` pode ser usado em qualquer lugar onde você precise exibir um ícone. Basta passar o nome do ícone desejado através da prop `name`.

```tsx
import React from 'react'
import { Icon } from '@ui/components/icon'

export const Example = () => {
  return <Icon name="ArrowRight" className="text-brand-primary-400 h-6 w-6" />
}
```

## Props

### `IconProps`

O `Icon` aceita as seguintes propriedades:

- **`name`** (obrigatório): O nome do ícone que você deseja exibir. Deve ser uma chave da biblioteca `ICONS_LIBRARY`.
- **`className`** (opcional): Uma string que permite a aplicação de classes utilitárias para estilização do ícone.

## Icones Disponíveis

A seguir estão os ícones disponíveis na `ICONS_LIBRARY`:

- `ArrowRight`
- `BookBold`
- `Book`
- `BookMarck`
- `Calendar`
- `ChevronLeft`
- `ClockTimeMenu`
- `ClockTime`
- `CoffeeCup`
- `Edit`
- `Heart`
- `House`
- `JellyCake`
- `Menu`
- `Nivel`
- `Restaurant`
- `Search`
- `Turkey`
- `UserCircle`
- `UserGroup`
- `WeightDiet`

## Exemplos

### Exemplo 1: Ícone de seta para a direita

```tsx
<Icon name="ArrowRight" className="text-brand-primary-400 h-6 w-6" />
```

### Exemplo 2: Ícone de calendário

```tsx
<Icon name="Calendar" className="text-brand-primary-400 h-6 w-6" />
```

## Considerações

- O `Icon` é altamente reutilizável e permite a aplicação de estilos dinâmicos através da prop `className`.
- O uso de `StyledComponent` permite integrar o ícone diretamente com o NativeWind para estilização reativa.
