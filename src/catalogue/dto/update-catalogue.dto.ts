import { PartialType } from '@nestjs/swagger/dist/type-helpers';
import { CreateCatalogueDto } from './create-catalogue.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCatalogueDto extends PartialType(CreateCatalogueDto) {
  @ApiProperty({
    description: 'Nome do Filme',
  })
  readonly name?: string;
  @ApiProperty({
    description: 'Descrição do Filme',
  })
  readonly description?: string;
}
