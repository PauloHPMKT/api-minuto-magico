export interface ChildModel {
  id: string
  name: string
  totalMinutes: number
  enterDateTime: Date
  exitDateTime?: Date
  createdAt?: Date
  updatedAt?: Date
}

export interface AddChildModel {
  name: string
  totalMinutes: number
}

export interface AddChildUseCase {
  add: (data: AddChildModel) => Promise<ChildModel>
}
