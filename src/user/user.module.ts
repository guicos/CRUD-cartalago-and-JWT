import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersUseCase } from './usecase/create/create-user.usecase';
import { UsersRepository } from './repository/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthUseCase } from 'src/auth/usecases/create/create-auth.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UsersRepository, UsersUseCase, AuthUseCase, AuthUseCase],
})
export class UsersModule {}
