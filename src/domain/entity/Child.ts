import { randomBytes } from "crypto";

export class Child {
  public readonly id: string;
  public name: string;
  public enterDateTime: Date;
  public totalMinutes: number;
  public leaveDateTime?: Date;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(props: Omit<Child, 'id'>, id?: string) {
    Object.assign(this, props);

    this.id = id || this.generateId();
    this.leaveDateTime = props.leaveDateTime ?? null;
    this.updatedAt = props.updatedAt ?? null;
    this.createdAt = props.createdAt ?? new Date();
  }

  private generateId() {
    return randomBytes(12).toString('hex');
  }

  public setEnterDateTime() {
    this.enterDateTime = new Date();
  }
}
