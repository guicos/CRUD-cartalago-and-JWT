import { Catalogue } from 'src/catalogue/entities/catalogue.entity';
import { IFindCatalogueUseCase } from './find-catalogue.interface';
import { Injectable } from '@nestjs/common';
import { RedisCatalogueRepository } from 'src/catalogue/repository/redis-cataloggue.repository';

@Injectable()
export class FindCatalogueUseCase implements IFindCatalogueUseCase {
  constructor(
    private readonly cataloguesRepository: RedisCatalogueRepository,
  ) {}
  execute(): Promise<Catalogue[]> {
    return this.cataloguesRepository.findAll();
  }
}
