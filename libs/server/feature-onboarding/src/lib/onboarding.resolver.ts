import {
  Resolver,
  Query,
  Mutation,
  Args,
  ObjectType,
  Field,
  Int,
  Context,
} from '@nestjs/graphql';
import { DeleteResult, ObjectId, UpdateResult } from 'mongodb';
import { SetMetadata, UseGuards } from '@nestjs/common';
import {
  GqlAuthGuard,
  PermissionsGuard,
} from '@planit/server/feature-authorization';
import { ServerFeatureOnboardingService } from './server-feature-onboarding.service';
import { OnboardingSteps } from './steps.enum';
import { OnboardingStatus } from './onboarding.entity';

@Resolver(() => OnboardingStatus)
export class OnboardingResolver {
  constructor(
    private readonly onboardingService: ServerFeatureOnboardingService
  ) {}

  @Query(() => OnboardingStatus, { name: 'onboardingStatus' })
  @UseGuards(GqlAuthGuard)
  getOnboardingStatus(@Context() ctx: any) {
    return this.onboardingService.getOnboardingStatus(ctx.auth.sub);
  }
}
