import { ApiProperty } from '@nestjs/swagger';

export class CreateCatalogueDto {
  @ApiProperty({
    description: 'Titulo do Filme',
  })
  name: string;
  @ApiProperty({
    description: 'Descrição do Filme',
  })
  description: string;
}
