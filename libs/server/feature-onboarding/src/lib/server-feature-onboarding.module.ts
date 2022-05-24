import { Module } from '@nestjs/common';
import { ServerFeatureAuthorizationModule } from '@planit/server/feature-authorization';
import { ServerFeatureOnboardingController } from './server-feature-onboarding.controller';
import { ServerFeatureOnboardingService } from './server-feature-onboarding.service';

@Module({
  imports: [ServerFeatureAuthorizationModule],
  controllers: [ServerFeatureOnboardingController],
  providers: [ServerFeatureOnboardingService],
  exports: [ServerFeatureOnboardingService],
})
export class ServerFeatureOnboardingModule {}
