import { Options, SqliteDriver } from '@mikro-orm/sqlite';
import { Migrator } from '@mikro-orm/migrations';
import { SampleEntity } from '@/nest/entities/sample';

const config: Options = {
  entities: [SampleEntity],
  dbName: 'database.sqlite3',
  driver: SqliteDriver,
};

export default config;