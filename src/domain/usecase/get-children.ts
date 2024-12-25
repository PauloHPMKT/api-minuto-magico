import { Child } from '../entities/Child';

export interface GetChildren {
  get(): Promise<Child[]>;
}
