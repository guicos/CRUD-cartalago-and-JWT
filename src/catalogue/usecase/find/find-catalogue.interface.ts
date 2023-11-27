import { Catalogue } from 'src/catalogue/entities/catalogue.entity';

export interface IFindCatalogueUseCase {
  execute(): Promise<Catalogue[]>;
}
