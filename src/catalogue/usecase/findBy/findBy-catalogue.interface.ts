import { FindCatalogueDto } from 'src/catalogue/dto/find-catalogue.dto';
import { Catalogue } from 'src/catalogue/entities/catalogue.entity';

export interface IFindByCatalogueUseCase {
  execute(body: FindCatalogueDto): Promise<Catalogue>;
}
