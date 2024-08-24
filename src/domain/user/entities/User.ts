import { Entity } from '@core/entities/Entity'
import { Optional } from '@core/types/Optional'

import { Allergy } from './Allergy'

interface UserProps {
  id: string
  name: string
  email: string
  dateOfBirth: Date
  allergies: Allergy[]
  avatar?: string
  bio?: string

  _createdAt: Date
  _updatedAt?: Date
}

class User extends Entity<UserProps> {
  get name(): string {
    return this.props.name
  }

  get email(): string {
    return this.props.email
  }

  get avatar(): string | null {
    return this.props?.avatar ?? null
  }

  get _updatedAt(): Date {
    return this.props._updatedAt!
  }

  private touch(): void {
    this.props._updatedAt = new Date()
  }

  set avatar(avatar: string) {
    this.props.avatar = avatar
    this.touch()
  }

  static create(
    props: Optional<UserProps, '_updatedAt' | '_createdAt'>,
    id?: string,
  ): User {
    const user = new User(
      {
        ...props,
        _createdAt: props._createdAt ?? new Date(),
        _updatedAt: props._updatedAt ?? new Date(),
      },
      id,
    )

    return user
  }
}

export { User, type UserProps }
