import { Field, InputType, PartialType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';
import { CreateRestaurantDTO } from './create-restaurant.dto';

@InputType()
export class UpdateRestaurantDTO extends PartialType(CreateRestaurantDTO) {
  @IsNotEmpty({ message: 'You must provide a valid restaurantId' })
  @IsObjectId({ message: 'restaurantId must be a valid ObjectId' })
  @ApiProperty()
  @Field(() => String)
  _id: string;
}
