import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export class Table extends Document {
  /**
   * The name of the Cat
   * @example Kitty
   */
  @ApiProperty({
    example: 'Mamasitas',
    description: 'The name of the restaurant.',
  })
  name: string;

  @ApiProperty({
    example: 'Cra 43D ## 10 - 77, Medellín, El Poblado, Medellín, Antioquia',
    description: 'The address of the restaurant.',
  })
  address: string;

  @ApiProperty({
    example: 'Argentinian Restaurant in Manila',
    description: 'The description of the restaurant.',
  })
  description: string;
}
