import { CreateAuthDto } from '../../dto/create-auth.dto';
import { AuthReturn } from '../../../public/interface/return-auth.interface';

export interface IAuthUseCase {
  execute(body: CreateAuthDto): Promise<AuthReturn>;
}
