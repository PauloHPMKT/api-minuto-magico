import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper';

MongoHelper.connect('mongodb://localhost:27017/minuto-magico')
  .then(async () => {
    console.warn('Connected to MongoDB');
    const app = (await import('./config/app')).default;
    app.listen(3003, () =>
      console.log('Server running at http://localhost:3003'),
    );
  })
  .catch(console.error);
