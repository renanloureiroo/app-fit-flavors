import crypto from 'node:crypto'

class Entity<Props> {
  private _id: string
  protected props: Props

  protected constructor(props: Props, id?: string) {
    this._id = id || crypto.randomUUID()
    this.props = props
  }

  get id(): string {
    return this._id
  }

  public equals(object?: Entity<Props>): boolean {
    return object === this || object?._id === this._id ? true : false
  }
}

export { Entity }
