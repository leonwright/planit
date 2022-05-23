import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ServerFeatureAuthorizationModule } from '@planit/server/feature-authorization';
import { ServerFeatureRestaurantsModule } from '@planit/server/feature-restaurants';
import { DataAccessModule, databaseProviders } from '@planit/server/shared';
import { auth } from 'express-oauth2-jwt-bearer';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServerFeatureAuthorizationModule,
    ServerFeatureRestaurantsModule,
    DataAccessModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        auth({
          issuerBaseURL: 'https://plan-it.us.auth0.com/',
          audience: 'https://api.planit.applictasy.com',
        })
      )
      .forRoutes('/api');
  }
}
