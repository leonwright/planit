import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';

@InputType()
export class GetRestaurantDTO {
  @IsNotEmpty({ message: 'restaurantId cannot be empty' })
  @IsObjectId({ message: 'A valid ObjectId must be provided for restaurantId' })
  @ApiProperty()
  @Field(() => String, { description: 'id of the restaurnant' })
  restaurantId: string;
}
