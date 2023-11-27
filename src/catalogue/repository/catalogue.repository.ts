import { Injectable } from '@nestjs/common';
import { ICataloguesRepository } from './catalogue-repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Catalogue } from '../entities/catalogue.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateCatalogueDto } from '../dto/create-catalogue.dto';
import { UpdateCatalogueDto } from '../dto/update-catalogue.dto';
import { FindCatalogueDto } from '../dto/find-catalogue.dto';

@Injectable()
export class CataloguesRepository implements ICataloguesRepository {
  constructor(
    @InjectRepository(Catalogue)
    private readonly catalogue: Repository<Catalogue>,
  ) {}

  create(body: CreateCatalogueDto): Promise<Catalogue> {
    return this.catalogue.save(body);
  }

  update(id: number, body: UpdateCatalogueDto): Promise<UpdateResult> {
    return this.catalogue.update(id, body);
  }

  findAll(): Promise<Catalogue[]> {
    return this.catalogue.find();
  }

  findBy(body: FindCatalogueDto): Promise<Catalogue> {
    return this.catalogue.findOneBy(body);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.catalogue.delete(id);
  }
}
