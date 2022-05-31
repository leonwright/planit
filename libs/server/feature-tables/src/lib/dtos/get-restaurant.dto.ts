import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';

export class GetRestaurantDTO {
  @IsNotEmpty({ message: 'restaurantId cannot be empty' })
  @IsObjectId({ message: 'A valid ObjectId must be provided for restaurantId' })
  @ApiProperty()
  restaurantId: string;
}
