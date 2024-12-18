export class Child {
  public readonly id: string;
  public name: string;
  public totalMinutes: number;
  public entryTime: Date;
  public exitTime: Date | null;
  public createdAt?: Date;
  public updatedAt: Date | null;

  constructor(props: Omit<Child, 'id'>, id?: string) {
    this.id = id ?? 'any_id';
    this.name = props.name;
    this.totalMinutes = props.totalMinutes;
    this.entryTime = props.entryTime;
    this.exitTime = props.exitTime ?? null;
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? null;
  }
}
