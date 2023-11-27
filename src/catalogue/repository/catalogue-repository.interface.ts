import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateCatalogueDto } from '../dto/create-catalogue.dto';
import { UpdateCatalogueDto } from '../dto/update-catalogue.dto';
import { Catalogue } from '../entities/catalogue.entity';
import { FindCatalogueDto } from '../dto/find-catalogue.dto';

export interface ICataloguesRepository {
  create(body: CreateCatalogueDto): Promise<Catalogue>;
  update(id: number, body: UpdateCatalogueDto): Promise<UpdateResult>;
  findAll(): Promise<Catalogue[]>;
  findBy(body: FindCatalogueDto): Promise<Catalogue>;
  delete(id: number): Promise<DeleteResult>;
}
