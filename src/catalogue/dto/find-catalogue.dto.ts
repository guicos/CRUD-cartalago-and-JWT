import { PartialType } from '@nestjs/mapped-types';
import { CreateCatalogueDto } from './create-catalogue.dto';
import { ApiProperty } from '@nestjs/swagger';

export class FindCatalogueDto extends PartialType(CreateCatalogueDto) {
  @ApiProperty()
  id: number;
}
