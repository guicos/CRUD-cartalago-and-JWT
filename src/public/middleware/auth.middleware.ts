import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, NextFunction } from 'express';
import { UsersRepository } from 'src/user/repository/user.repository';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userRepository: UsersRepository) {}

  async use(req: Request, next: NextFunction) {
    const jwtService = new JwtService();
    const authHeader =
      req?.headers?.authorization || req?.body?.headers?.Authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Insira um token');
    }
    const [, token] = authHeader.split(' ');

    const payload = await jwtService.verify(token, {
      secret: 'secret',
    });

    const user = await this.userRepository.findBy({
      email: payload.email,
    });

    next();
  }
}
