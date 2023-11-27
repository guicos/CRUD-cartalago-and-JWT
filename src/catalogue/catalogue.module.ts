import { Module } from '@nestjs/common';
import { CatalogueController } from './catalogue.controller';
import { CreateCatalogueUseCase } from './usecase/create/create-catalogue.usecase';
import { FindByCatalogueUseCase } from './usecase/findBy/findBy-catalogue.usecase';
import { FindCatalogueUseCase } from './usecase/find/find-catalogue.usecase';
import { UpdateCatalogueUseCase } from './usecase/update/update-catalogue.usecase';
import { DeleteCatalogueUseCase } from './usecase/delete/delete-catalogue.usecase';
import { CataloguesRepository } from './repository/catalogue.repository';
import { AuthMiddleware } from 'src/public/middleware/auth.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catalogue } from './entities/catalogue.entity';
import { UsersRepository } from 'src/user/repository/user.repository';
import { User } from 'src/user/entities/user.entity';
import { RedisCatalogueRepository } from './repository/redis-cataloggue.repository';
import { RedisService } from 'src/public/config/redisConfig';

@Module({
  imports: [TypeOrmModule.forFeature([Catalogue, User])],
  controllers: [CatalogueController],
  providers: [
    CreateCatalogueUseCase,
    FindByCatalogueUseCase,
    FindCatalogueUseCase,
    UpdateCatalogueUseCase,
    DeleteCatalogueUseCase,
    CataloguesRepository,
    AuthMiddleware,
    RedisCatalogueRepository,
    UsersRepository,
    RedisService,
  ],
})
export class CatalogueModule {}
