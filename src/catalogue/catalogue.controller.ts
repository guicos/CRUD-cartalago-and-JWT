import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Next,
} from '@nestjs/common';
import { CreateCatalogueDto } from './dto/create-catalogue.dto';
import { UpdateCatalogueDto } from './dto/update-catalogue.dto';
import { AuthMiddleware } from 'src/public/middleware/auth.middleware';
import { Request } from 'express';
import { CreateCatalogueUseCase } from './usecase/create/create-catalogue.usecase';
import { FindCatalogueUseCase } from './usecase/find/find-catalogue.usecase';
import { UpdateCatalogueUseCase } from './usecase/update/update-catalogue.usecase';
import { FindByCatalogueUseCase } from './usecase/findBy/findBy-catalogue.usecase';
import { DeleteCatalogueUseCase } from './usecase/delete/delete-catalogue.usecase';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Catalogo')
@Controller('catalogue')
export class CatalogueController {
  constructor(
    private readonly createCatalogueUseCase: CreateCatalogueUseCase,
    private readonly findCatalogueUseCase: FindCatalogueUseCase,
    private readonly updateCatalogueUseCase: UpdateCatalogueUseCase,
    private readonly findByCatalogueUseCase: FindByCatalogueUseCase,
    private readonly deleteCatalogueUseCase: DeleteCatalogueUseCase,
    private readonly authMiddleware: AuthMiddleware,
  ) {}

  @ApiUnauthorizedResponse()
  @Post()
  @ApiOperation({ summary: 'Cria o novo filme no catalago' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  @ApiResponse({ status: 401, description: 'Não Autorizado' })
  @ApiBody({ type: [CreateCatalogueDto] })
  async create(
    @Body() createCatalogueDto: CreateCatalogueDto,
    @Req() req: Request,
  ) {
    await this.authMiddleware.use(req, Next);
    return this.createCatalogueUseCase.execute(createCatalogueDto);
  }

  @ApiUnauthorizedResponse()
  @Get()
  @ApiOperation({ summary: 'Busca todos os filmes do catalago' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  @ApiResponse({ status: 401, description: 'Não Autorizado' })
  async findAll(@Req() req: Request) {
    await this.authMiddleware.use(req, Next);
    return this.findCatalogueUseCase.execute();
  }

  @ApiUnauthorizedResponse()
  @Get(':id')
  @ApiOperation({ summary: 'Busca o filme selecionado' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  @ApiResponse({ status: 401, description: 'Não Autorizado' })
  async findOne(@Param('id') id: string, @Req() req: Request) {
    await this.authMiddleware.use(req, Next);
    return this.findByCatalogueUseCase.execute({ id: +id });
  }

  @ApiUnauthorizedResponse()
  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza o filme selecionado' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  @ApiResponse({ status: 401, description: 'Não Autorizado' })
  @ApiParam({ name: 'id' })
  @ApiBody({ type: [CreateCatalogueDto] })
  async update(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() updateCatalogueDto: UpdateCatalogueDto,
  ) {
    await this.authMiddleware.use(req, Next);
    return this.updateCatalogueUseCase.execute(+id, updateCatalogueDto);
  }

  @ApiUnauthorizedResponse()
  @Delete(':id')
  @ApiOperation({ summary: 'Deleta o filme selecionado' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  @ApiResponse({ status: 401, description: 'Não Autorizado' })
  async remove(@Param('id') id: string, @Req() req: Request) {
    await this.authMiddleware.use(req, Next);
    return this.deleteCatalogueUseCase.execute(+id);
  }
}
