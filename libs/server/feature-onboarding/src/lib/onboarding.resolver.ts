import { Resolver, Query, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '@planit/server/feature-authorization';
import { ServerFeatureOnboardingService } from './server-feature-onboarding.service';
import { OnboardingStatus } from './onboarding.entity';

@Resolver(() => OnboardingStatus)
export class OnboardingResolver {
  constructor(
    private readonly onboardingService: ServerFeatureOnboardingService
  ) {}

  @Query(() => OnboardingStatus, { name: 'onboardingStatus' })
  @UseGuards(GqlAuthGuard)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getOnboardingStatus(@Context() ctx: any) {
    return this.onboardingService.getOnboardingStatus(ctx.auth.sub);
  }
}
