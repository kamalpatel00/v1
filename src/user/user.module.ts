import { userProvider } from './user.provider';
import { DbModule } from './../db/db.module';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService, ...userProvider],
  exports: [UserService],
  imports: [DbModule],
})
export class UserModule {}
