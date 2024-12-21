import { Child } from '../../../../domain/entities/Child';
import { AddChildRepository } from '../../../../data/protocols/add-child-repository';
import { MongoHelper } from '../helpers/mongo-helper';
import { ChildModel } from '../../../../domain/models/child';

export class ChildRepository implements AddChildRepository {
  async add(childData: ChildModel): Promise<Child> {
    const childCollection = MongoHelper.getCollection('children');
    const { insertedId } = await childCollection.insertOne(childData);
    const child = await childCollection.findOne({ _id: insertedId });
    console.log(child);
    return MongoHelper.map(child);
  }
}
