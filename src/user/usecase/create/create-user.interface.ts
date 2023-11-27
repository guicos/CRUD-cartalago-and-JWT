import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';

export interface IUserUseCase {
  execute(body: CreateUserDto): Promise<User>;
}
