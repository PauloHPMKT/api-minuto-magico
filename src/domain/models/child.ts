import { Child } from '../entities/Child';

export type ChildModel = Omit<Child, 'id'>;
