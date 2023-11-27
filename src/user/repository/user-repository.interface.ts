import { CreateUserDto } from '../dto/create-user.dto';
import { GetUserDto } from '../dto/get-user.dto';
import { User } from '../entities/user.entity';

export interface IUserRepository {
  create(body: CreateUserDto): Promise<User>;
  findBy(body: GetUserDto): Promise<User>;
}
