import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthUseCase } from './usecases/create/create-auth.usecase';
import { UsersRepository } from 'src/user/repository/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthUseCase, UsersRepository],
})
export class AuthModule {}
