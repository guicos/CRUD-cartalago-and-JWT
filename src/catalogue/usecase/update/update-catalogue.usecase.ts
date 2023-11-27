import { UpdateCatalogueDto } from 'src/catalogue/dto/update-catalogue.dto';
import { Catalogue } from 'src/catalogue/entities/catalogue.entity';
import { IUpdateCatalogueUseCase } from './update-catalogue.interface';
import { CataloguesRepository } from 'src/catalogue/repository/catalogue.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateCatalogueUseCase implements IUpdateCatalogueUseCase {
  constructor(private readonly cataloguesRepository: CataloguesRepository) {}
  async execute(id: number, body: UpdateCatalogueDto): Promise<Catalogue> {
    await this.cataloguesRepository.update(id, body);
    return this.cataloguesRepository.findBy({ id });
  }
}
