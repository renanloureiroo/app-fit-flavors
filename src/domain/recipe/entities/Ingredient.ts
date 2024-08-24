import { Entity } from '@core/entities/Entity'

interface IngredientProps {
  name: string
  quantity: string
  description?: string
}

class Ingredient extends Entity<IngredientProps> {
  get name(): string {
    return this.props.name
  }

  get quantity(): string {
    return this.props.quantity
  }

  get description(): string | null {
    return this.props?.description ?? null
  }

  static create(props: IngredientProps, id?: string): Ingredient {
    const ingredient = new Ingredient(props, id)

    return ingredient
  }
}

export { Ingredient, type IngredientProps }
