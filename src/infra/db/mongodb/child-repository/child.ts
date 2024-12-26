import { Child } from '../../../../domain/entities/Child';
import { AddChildRepository } from '../../../../data/protocols/add-child-repository';
import { MongoHelper } from '../helpers/mongo-helper';
import { ChildModel } from '../../../../domain/models/child';
import { GetChildrenRepository } from '../../../../data/protocols/get-children-repository';

export class ChildRepository
  implements AddChildRepository, GetChildrenRepository
{
  async add(childData: ChildModel): Promise<Child> {
    const childCollection = MongoHelper.getCollection('children');
    const { insertedId } = await childCollection.insertOne(childData);
    const child = await childCollection.findOne({ _id: insertedId });

    return MongoHelper.map(child);
  }

  async get(): Promise<Child[]> {
    const collection = MongoHelper.getCollection('children');
    const children = await collection.find().toArray();
    return children.map(MongoHelper.map);
  }
}
