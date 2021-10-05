import { injectedConsts } from 'src/constants';
import { createConnection } from 'typeorm';
import { DBConstants } from '../../database-constants';

export const databaseProviders = [
  {
    provide: injectedConsts.DATABASE_CONNECTION,
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: DBConstants.DB_HOST,
        port: DBConstants.DB_PORT as unknown as number,
        username: DBConstants.DB_USER,
        password: DBConstants.DB_PASSWORD,
        database: DBConstants.DB_SCHEMA,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
  },
];
