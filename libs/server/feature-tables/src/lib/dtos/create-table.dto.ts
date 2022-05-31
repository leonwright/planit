import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';

@InputType()
export class CreateTableDTO {
  @ApiProperty({
    example: 'Table 1',
    description: 'The name of the table.',
  })
  @IsNotEmpty({ message: 'You must provide a name for the table.' })
  @MaxLength(50, { message: 'Table Name cannot be longer than 50 chars' })
  @Field(() => String, { description: 'The name of the table.' })
  name: string;

  @ApiProperty({
    description: 'the id of the restaurant that owns the table',
  })
  @IsNotEmpty({ message: 'RestaurantId cannot be empty' })
  @IsObjectId({ message: 'You need to provide a valid ObjectID' })
  @Field(() => String, {
    description: 'restaurantId of the restaurant that will own the table',
  })
  restaurantId: string;
}
