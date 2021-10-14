import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConstants } from '../database-constants';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: DBConstants.DB_USER,
      password: DBConstants.DB_PASSWORD,
      database: DBConstants.DB_SCHEMA,

      entities: ['dist/**/*.entity{ .ts,.js}'],
      synchronize: true,
      // migrations: ["dist/migrations/*{.ts,.js}"],
      // migrationsTableName: "migrations_typeorm",
      migrationsRun: true,
      autoLoadEntities: true,
      // logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
