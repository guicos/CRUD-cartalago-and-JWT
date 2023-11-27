import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IAuthUseCase } from './create-auth.interface';
import { CreateAuthDto } from '../../dto/create-auth.dto';
import { AuthReturn } from '../../../public/interface/return-auth.interface';
import { JwtModule, JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from 'src/user/repository/user.repository';

@Injectable()
export class AuthUseCase implements IAuthUseCase {
  constructor(private readonly userRepository: UsersRepository) {}

  async execute(body: CreateAuthDto): Promise<AuthReturn> {
    const jwtService = new JwtService();

    const user = await this.userRepository.findBy({
      email: body.email,
    });

    if (!user) throw new UnauthorizedException('User não existe');

    const pass = await bcrypt.compare(body.password, user.password);

    if (!pass) throw new UnauthorizedException('Invalid credentials');

    JwtModule.register({ secretOrPrivateKey: 'secret' });

    return {
      access_token: jwtService.sign(
        { username: body.email, id: user.id },
        { secret: 'secret' },
      ),
      name: user.name,
      id: user.id,
    };
  }
}
