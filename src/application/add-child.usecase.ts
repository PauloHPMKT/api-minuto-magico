import { AddChildModel } from "../domain/models/add-child.model";
import { AddChildUseCase, ChildModel } from "../domain/usecases/add-child";

export class AddChildUseCaseImplementation implements AddChildUseCase {
  add(data: AddChildModel): Promise<ChildModel> {
    console.log(data, 'Data do usecase')
    return new Promise(resolve => resolve({
      id: 'valid_id',
      name: 'valid_name',
      enterDateTime: new Date(),
      totalMinutes: 10,
    }))
  }

  private calculateTotalMinutes(timeEnter: Date, timeExit: Date): number {
    const diff = timeExit.getTime() - timeEnter.getTime();
    return Math.floor(diff / 60000);
  }
}

// async add(data: AddChildModel): Promise<ChildModel> {
//   const enterDateTime = new Date();
//   const exitDateTime = new Date(enterDateTime.getTime() + data.minutes * 60000);
//   const totalMinutes = this.calculateTotalMinutes(enterDateTime, exitDateTime);

//   const child: ChildModel = {
//     id: 'valid_id',
//     name: data.name,
//     enterDateTime,
//     totalMinutes,
//   };

//   console.log(child, 'Child data after processing');
//   return new Promise(resolve => resolve(child));
// }