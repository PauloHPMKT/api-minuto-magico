import { DbGetChildren } from '../../data/usecases/db-get-children';
import { ChildRepository } from '../../infra/db/mongodb/child-repository/child';
import { GetChildrenController } from '../../presentation/controller/get-children/get-children';

export const makeGetChildrenController = (): GetChildrenController => {
  const childMongoRepository = new ChildRepository();
  const getChildrenUseCase = new DbGetChildren(childMongoRepository);
  return new GetChildrenController(getChildrenUseCase);
};
