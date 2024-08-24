import { Entity } from '@core/entities/Entity'
import { Optional } from '@core/types/Optional'

import { Ingredient } from './Ingredient'
import { NutritionalInfo } from './NutritionalInfo'

type Difficulty = 'easy' | 'medium' | 'hard'

interface RecipeProps {
  name: string
  description: string
  ingredients: Ingredient[]
  timeOfCooking: number
  difficulty: Difficulty
  nutritionalInfo?: NutritionalInfo

  createdAt: Date
  updatedAt?: Date
}

class Recipe extends Entity<RecipeProps> {
  get name(): string {
    return this.props.name
  }

  set name(name: string) {
    this.props.name = name
    this.touch()
  }

  get description(): string {
    return this.props.description
  }

  set description(description: string) {
    this.props.description = description
    this.touch()
  }

  get ingredients(): Ingredient[] {
    return this.props.ingredients
  }

  set ingredients(ingredients: Ingredient[]) {
    this.props.ingredients = ingredients
    this.touch()
  }

  get timeOfCooking(): number {
    return this.props.timeOfCooking
  }

  set timeOfCooking(timeOfCooking: number) {
    this.props.timeOfCooking = timeOfCooking
    this.touch()
  }

  get difficulty(): Difficulty {
    return this.props.difficulty
  }

  set difficulty(difficulty: Difficulty) {
    this.props.difficulty = difficulty
    this.touch()
  }

  get nutritionalInfo(): NutritionalInfo | null {
    return this.props?.nutritionalInfo ?? null
  }

  set nutritionalInfo(nutritionalInfo: NutritionalInfo) {
    this.props.nutritionalInfo = nutritionalInfo
    this.touch()
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updatedAt(): Date {
    return this.props.updatedAt!
  }

  private touch(): void {
    this.props.updatedAt = new Date()
  }

  static create(
    props: Optional<RecipeProps, 'createdAt'>,
    id?: string,
  ): Recipe {
    const recipe = new Recipe(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      },
      id,
    )

    return recipe
  }
}

export { Recipe, type RecipeProps, type Difficulty }
