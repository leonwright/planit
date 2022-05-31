import { ObjectType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType({ description: 'restaurnant ' })
export class Table extends Document {
  @Field(() => String)
  _id?: MongooseSchema.Types.ObjectId;

  @ApiProperty({
    example: 'Table #1',
    description: 'An arbitrary name for the table',
  })
  @Prop()
  @Field(() => String, { description: 'The name of the table.' })
  name: string;

  @Prop()
  @Field(() => String, {
    description: 'the ObjectId of the restaurant that owns the table',
  })
  restaurantId: MongooseSchema.Types.ObjectId;
}

export const TableSchema = SchemaFactory.createForClass(Table);
