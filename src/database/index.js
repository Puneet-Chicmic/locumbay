import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import models from './models';
import schema from './models/schema';

const adapter = new SQLiteAdapter({
  dbName: 'locumbay',
  schema,
});

const database = new Database({
  adapter,
  modelClasses: models,
  actionsEnabled: true,
});

export default database;