import { Catalogue } from 'src/catalogue/entities/catalogue.entity';
import { IFindByCatalogueUseCase } from './findBy-catalogue.interface';
import { FindCatalogueDto } from 'src/catalogue/dto/find-catalogue.dto';
import { CataloguesRepository } from 'src/catalogue/repository/catalogue.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindByCatalogueUseCase implements IFindByCatalogueUseCase {
  constructor(private readonly cataloguesRepository: CataloguesRepository) {}
  execute(body: FindCatalogueDto): Promise<Catalogue> {
    return this.cataloguesRepository.findBy({ id: +body.id });
  }
}
