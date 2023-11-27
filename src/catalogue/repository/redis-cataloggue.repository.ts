import { Injectable } from '@nestjs/common';
import { CataloguesRepository } from './catalogue.repository';
import { RedisService } from 'src/public/config/redisConfig';
import { Catalogue } from '../entities/catalogue.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { FindCatalogueDto } from '../dto/find-catalogue.dto';
import { ICataloguesRepository } from './catalogue-repository.interface';

@Injectable()
export class RedisCatalogueRepository implements ICataloguesRepository {
  constructor(
    private readonly redis: RedisService,
    private readonly catalogue: CataloguesRepository,
  ) {}

  async findAll(): Promise<Catalogue[]> {
    const cache = await this.redis.get('catalogue');

    if (!cache) {
      const catalogue = await this.catalogue.findAll();
      await this.redis.set('catalogue', JSON.stringify(catalogue), 'EX', 15);
      return catalogue;
    }

    return JSON.parse(cache);
  }

  create(): Promise<Catalogue> {
    return;
  }

  delete(): Promise<DeleteResult> {
    return;
  }

  async findBy(body: FindCatalogueDto): Promise<Catalogue> {
    const cache = await this.redis.get(`${body.id}`);

    if (!cache) {
      const catalogue = await this.catalogue.findBy(body);
      await this.redis.set('catalogue', JSON.stringify(catalogue), 'EX', 15);
      return catalogue;
    }

    return JSON.parse(cache);
  }

  update(): Promise<UpdateResult> {
    return;
  }
}
