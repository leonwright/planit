import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  ApplicationSettingsModule,
  configuration,
} from '@planit/server/shared';
import { ServerFeatureOnboardingController } from './server-feature-onboarding.controller';
import { ServerFeatureOnboardingService } from './server-feature-onboarding.service';

@Module({
  imports: [
    ApplicationSettingsModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [ServerFeatureOnboardingController],
  providers: [ServerFeatureOnboardingService],
  exports: [ServerFeatureOnboardingService],
})
export class ServerFeatureOnboardingModule {}
