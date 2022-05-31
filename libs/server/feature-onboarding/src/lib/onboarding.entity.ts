import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType({ description: 'onboarding_steps ' })
export class OnboardingStatus {
  @Field(() => String, { description: 'status of user' })
  status: 'create_restaturant' | 'change_password' | 'complete';
}
