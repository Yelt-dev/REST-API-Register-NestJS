import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/register/register.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'bbnxhjhfacatra3dh5de-postgresql.services.clever-cloud.com',
      port: 5432,
      username: 'uk8a6bl4idwygbebt1ri',
      password: 'SLlYtxVTxlECEYYv5yX2',
      database: 'bbnxhjhfacatra3dh5de',
      entities: [User],
      autoLoadEntities: true,
      synchronize: true
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
