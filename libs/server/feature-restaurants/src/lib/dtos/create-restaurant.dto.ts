import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class CreateRestaurantDTO {
  @ApiProperty({
    example: 'Mamasitas',
    description: 'The name of the restaurant.',
  })
  @IsNotEmpty({ message: 'You must provide a name for the restaurant.' })
  @MaxLength(50, { message: 'Restaurant Name cannot be longer than 50 chars' })
  @Field(() => String, { description: 'name of the restaurnant' })
  name: string;

  @ApiProperty({
    example: 'Argentinian Restaurant in Manila',
    description: 'The description of the restaurant.',
  })
  @IsNotEmpty({
    message: 'You must provide a short description for your restaurant.',
  })
  @MaxLength(255, {
    message: 'Your description cannot be longer than 255 chars',
  })
  @Field(() => String, { description: 'description of the restaurnant' })
  description: string;

  @ApiProperty({
    example: 'Cra 43D ## 10 - 77, Medellín, El Poblado, Medellín, Antioquia',
    description: 'The address of the restaurant.',
  })
  @IsNotEmpty({
    message: 'You must provide address for your restaurant.',
  })
  @MaxLength(255, {
    message: 'Your address cannot be longer than 255 chars',
  })
  @Field(() => String, { description: 'address of the restaurnant' })
  address: string;
}
