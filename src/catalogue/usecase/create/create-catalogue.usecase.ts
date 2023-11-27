import { Injectable } from '@nestjs/common';
import { CreateCatalogueDto } from 'src/catalogue/dto/create-catalogue.dto';
import { Catalogue } from 'src/catalogue/entities/catalogue.entity';
import { ICreateCatalogueUseCase } from './create-catalogue.interface';
import { CataloguesRepository } from 'src/catalogue/repository/catalogue.repository';

@Injectable()
export class CreateCatalogueUseCase implements ICreateCatalogueUseCase {
  constructor(private readonly cataloguesRepository: CataloguesRepository) {}

  execute(body: CreateCatalogueDto): Promise<Catalogue> {
    return this.cataloguesRepository.create(body);
  }
}
