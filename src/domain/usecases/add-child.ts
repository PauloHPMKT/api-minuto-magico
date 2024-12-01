import { AddChildModel } from "../models/add-child.model";

export interface ChildModel {
    id: string;
    name: string;
    enterDateTime: Date;
    totalMinutes: number;
    leaveDateTime?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface AddChildUseCase {
    add(data: AddChildModel): ChildModel;
}
