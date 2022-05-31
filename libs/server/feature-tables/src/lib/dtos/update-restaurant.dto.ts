import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';

export class UpdateRestaurantDTO {
  @IsNotEmpty({ message: 'You must provide a valid restaurantId' })
  @IsObjectId({ message: 'restaurantId must be a valid ObjectId' })
  @ApiProperty()
  restaurantId: string;

  @IsOptional()
  @ApiProperty()
  @IsNotEmpty({ message: 'Please name or provide a value.' })
  name: string;

  @IsOptional()
  @ApiProperty()
  @IsNotEmpty({ message: 'Please description or provide a value.' })
  description: string;

  @IsOptional()
  @ApiProperty()
  @IsNotEmpty({ message: 'Please address or provide a value.' })
  address: string;
}
