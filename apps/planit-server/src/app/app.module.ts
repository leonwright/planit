import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ServerFeatureAuthorizationModule } from '@planit/server/feature-authorization';
import { ServerFeatureRestaurantsModule } from '@planit/server/feature-restaurants';
import {
  ApplicationSettingsModule,
  configuration,
  DataAccessModule,
  SettingsServiceService,
} from '@planit/server/shared';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerFeatureOnboardingModule } from '@planit/server/feature-onboarding';

@Module({
  imports: [
    ServerFeatureAuthorizationModule,
    ServerFeatureRestaurantsModule,
    ServerFeatureOnboardingModule,
    DataAccessModule,
    ApplicationSettingsModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly settingsSetvice: SettingsServiceService) {}

  onApplicationBootstrap() {
    this.settingsSetvice.init('leons-mackbook');
  }
}
