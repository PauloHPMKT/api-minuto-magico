import { DbAddChild } from '../../data/usecases/db-add-child';
import { ChildRepository } from '../../infra/db/mongodb/child-repository/child';
import { AddChildController } from '../../presentation/controller/add-child/add-child';

export const makeAddChildController = (): AddChildController => {
  const childMongoRepository = new ChildRepository();
  const addChildUseCase = new DbAddChild(childMongoRepository);
  return new AddChildController(addChildUseCase);
};
