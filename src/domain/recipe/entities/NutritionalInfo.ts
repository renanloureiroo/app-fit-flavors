import { Entity } from '@core/entities/Entity'

interface NutritionalInfoProps {
  calories: number
  protein: number
  fat: number
  carbohydrates: number
}

class NutritionalInfo extends Entity<NutritionalInfoProps> {
  get calories(): number {
    return this.props.calories
  }

  get protein(): number {
    return this.props.protein
  }

  get fat(): number {
    return this.props.fat
  }

  get carbohydrates(): number {
    return this.props.carbohydrates
  }

  static create(props: NutritionalInfoProps, id?: string): NutritionalInfo {
    const nutritionalInfo = new NutritionalInfo(props, id)

    return nutritionalInfo
  }
}

export { NutritionalInfo, type NutritionalInfoProps }
