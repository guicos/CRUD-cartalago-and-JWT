import { CreateCatalogueDto } from 'src/catalogue/dto/create-catalogue.dto';
import { Catalogue } from 'src/catalogue/entities/catalogue.entity';

export interface ICreateCatalogueUseCase {
  execute(body: CreateCatalogueDto): Promise<Catalogue>;
}
