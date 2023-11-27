import { DeleteResult } from 'typeorm';

export interface IDeleteCatalogueUseCase {
  execute(id: number): Promise<DeleteResult>;
}
