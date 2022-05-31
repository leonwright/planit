import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ServerFeatureRestaurantsModule } from '@planit/server/feature-restaurants';
import {
  ApplicationSettingsModule,
  configuration,
  DataAccessModule,
  SettingsServiceService,
} from '@planit/server/shared';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerFeatureOnboardingModule } from '@planit/server/feature-onboarding';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ServerFeatureTablesModule } from '@planit/server/feature-tables';

@Module({
  imports: [
    ServerFeatureRestaurantsModule,
    ServerFeatureOnboardingModule,
    ServerFeatureTablesModule,
    DataAccessModule,
    ApplicationSettingsModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './schema.gql',
      debug: true,
      playground: true,
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
