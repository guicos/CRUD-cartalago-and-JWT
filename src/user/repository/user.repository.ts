import { CreateUserDto } from '../dto/create-user.dto';
import { IUserRepository } from './user-repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { GetUserDto } from '../dto/get-user.dto';

@Injectable()
export class UsersRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
  ) {}

  create(body: CreateUserDto): Promise<User> {
    return this.user.save(body);
  }

  findBy(body: GetUserDto): Promise<User> {
    return this.user.findOneBy(body);
  }
}
