import { Module } from '@nestjs/common';
import { RegisterController } from './register/register.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { RegisterService } from './register/register.service';
import { ChangePasswordController } from './change-password/change-password.controller';
import { ChangePasswordService } from './change-password/change-password.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './register/register.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [RegisterController, AuthController, ChangePasswordController],
  providers: [AuthService, RegisterService, ChangePasswordService]
})
export class UsersModule {}
