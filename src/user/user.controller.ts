import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthUseCase } from 'src/auth/usecases/create/create-auth.usecase';
import { UsersUseCase } from './usecase/create/create-user.usecase';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuario')
@Controller('user')
export class UserController {
  constructor(
    private readonly userUseCase: UsersUseCase,
    private readonly authUseCase: AuthUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Cria usuario e autentica' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  @ApiResponse({ status: 401, description: 'Usuario já existe' })
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.userUseCase.execute(createUserDto);

    const response = this.authUseCase.execute({
      email: user.email,
      password: createUserDto.password,
    });

    return response;
  }
}
