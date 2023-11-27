import { UpdateCatalogueDto } from 'src/catalogue/dto/update-catalogue.dto';
import { Catalogue } from 'src/catalogue/entities/catalogue.entity';

export interface IUpdateCatalogueUseCase {
  execute(id: number, body: UpdateCatalogueDto): Promise<Catalogue>;
}
