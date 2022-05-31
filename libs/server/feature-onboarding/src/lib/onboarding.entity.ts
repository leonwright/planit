import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'onboarding_steps ' })
export class OnboardingStatus {
  @Field(() => String, { description: 'status of user' })
  status: 'create_restaturant' | 'change_password' | 'complete';
}
