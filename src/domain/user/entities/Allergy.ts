import { Entity } from '@core/entities/Entity'

interface AllergyProps {
  name: string
  description: string
}

class Allergy extends Entity<AllergyProps> {
  get name(): string {
    return this.props.name
  }

  get description(): string {
    return this.props.description
  }

  static create(props: AllergyProps, id?: string): Allergy {
    const allergy = new Allergy(props, id)

    return allergy
  }
}

export { Allergy, type AllergyProps }
