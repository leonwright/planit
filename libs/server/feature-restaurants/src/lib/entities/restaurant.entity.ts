import { ApiProperty } from '@nestjs/swagger';

export class Restaurant {
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
}
