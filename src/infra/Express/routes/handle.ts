import { AddChildUseCaseImplementation } from "../../../application/add-child.usecase";
import { AddChildController } from "../../../presentation/controllers/add-child.controller";

const addChildUseCase = new AddChildUseCaseImplementation();
const addChildController = new AddChildController(addChildUseCase);

export {
  addChildController,
}