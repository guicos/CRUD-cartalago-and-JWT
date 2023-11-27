import { Controller, Post, Body } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthUseCase } from './usecases/create/create-auth.usecase';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Realiza sua autenticação' })
  @ApiResponse({ status: 201, description: 'Sucesso' })
  @ApiResponse({ status: 401, description: 'Credencial Invalida' })
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.execute(createAuthDto);
  }
}
