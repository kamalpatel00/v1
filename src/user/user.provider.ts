import { injectedConsts } from 'src/constants';
import { User } from './entities/user.entity';
import { Connection } from 'typeorm';

export const userProvider = [
  {
    provide: injectedConsts.USER_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [injectedConsts.DATABASE_CONNECTION],
  },
];
