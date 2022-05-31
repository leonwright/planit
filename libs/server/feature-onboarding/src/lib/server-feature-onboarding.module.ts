import { Module } from '@nestjs/common';
import { ServerFeatureAuthorizationModule } from '@planit/server/feature-authorization';
import { OnboardingResolver } from './onboarding.resolver';
import { ServerFeatureOnboardingService } from './server-feature-onboarding.service';

@Module({
  imports: [ServerFeatureAuthorizationModule],
  controllers: [],
  providers: [ServerFeatureOnboardingService, OnboardingResolver],
  exports: [ServerFeatureOnboardingService, OnboardingResolver],
})
export class ServerFeatureOnboardingModule {}
