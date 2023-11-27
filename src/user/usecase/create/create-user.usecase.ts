import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { IUserUseCase } from './create-user.interface';
import { User } from 'src/user/entities/user.entity';
import { UsersRepository } from 'src/user/repository/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersUseCase implements IUserUseCase {
  constructor(private readonly userRepository: UsersRepository) {}

  async execute(body: CreateUserDto): Promise<User> {
    const existEmail = await this.userRepository.findBy({ email: body.email });

    if (existEmail) {
      throw new UnauthorizedException('Email já cadastrado');
    }

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(body.password, salt);

    const response = await this.userRepository.create({
      name: body.name,
      email: body.email,
      password: hash,
    });

    return response;
  }
}
