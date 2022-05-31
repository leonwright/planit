import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType({ description: 'restaurnant ' })
export class Restaurant extends Document {
  @Field(() => String)
  _id?: MongooseSchema.Types.ObjectId;

  @ApiProperty({
    example: 'Mamasitas',
    description: 'The name of the restaurant.',
  })
  @Prop()
  @Field(() => String, { description: 'The name of the restaurant.' })
  name: string;

  @ApiProperty({
    example: 'Cra 43D ## 10 - 77, Medellín, El Poblado, Medellín, Antioquia',
    description: 'The address of the restaurant.',
  })
  @Prop()
  @Field(() => String, { description: 'The address of the restaurant.' })
  address: string;

  @ApiProperty({
    example: 'Argentinian Restaurant in Manila',
    description: 'The description of the restaurant.',
  })
  @Prop()
  @Field(() => String, { description: 'The description of the restaurant.' })
  description: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
