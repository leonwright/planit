import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';

export class CreateTableDTO {
  @ApiProperty({
    example: 'Table 1',
    description: 'The name of the table.',
  })
  @IsNotEmpty({ message: 'You must provide a name for the table.' })
  @MaxLength(50, { message: 'Table Name cannot be longer than 50 chars' })
  name: string;

  @ApiProperty({
    example: 'Argentinian Restaurant in Manila',
    description: 'The description of the restaurant.',
  })
  @MaxLength(255, {
    message: 'Your description cannot be longer than 255 chars',
  })
  @IsNotEmpty({ message: 'RestaurantId cannot be empty' })
  @IsObjectId({ message: 'You need to provide a valid ObjectID' })
  restaurantId: string;
}
