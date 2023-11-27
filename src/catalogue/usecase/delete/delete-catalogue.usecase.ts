import { Injectable } from '@nestjs/common';
import { CataloguesRepository } from 'src/catalogue/repository/catalogue.repository';
import { DeleteResult } from 'typeorm';

@Injectable()
export class DeleteCatalogueUseCase {
  constructor(private readonly catalogueRepository: CataloguesRepository) {}
  execute(id: number): Promise<DeleteResult> {
    return this.catalogueRepository.delete(id);
  }
}
