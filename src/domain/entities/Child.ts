import { randomBytes } from 'crypto';

export class Child {
  public readonly id: string;
  public name: string;
  public totalMinutes: number;
  public entryTime?: Date;
  public exitTime?: Date;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(props: Omit<Child, 'id'>) {
    Object.assign(this, props);

    this.entryTime = props.entryTime || new Date();
    this.exitTime = props.exitTime ?? null;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = props.updatedAt ?? null;
  }
}
