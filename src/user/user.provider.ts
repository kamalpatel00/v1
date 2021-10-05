import { User } from './entities/user.entity';
import { Connection } from 'typeorm';
import { injectedConsts } from './../constants';

export const userProvider = [
  {
    provide: injectedConsts.USER_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [injectedConsts.DATABASE_CONNECTION],
  },
];
