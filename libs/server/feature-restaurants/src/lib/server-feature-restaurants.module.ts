import { Module } from '@nestjs/common';
import { ServerFeatureAuthorizationModule } from '@planit/server/feature-authorization';
import { ServerFeatureRestaurantsController } from './server-feature-restaurants.controller';
import { ServerFeatureRestaurantsService } from './server-feature-restaurants.service';

@Module({
  imports: [ServerFeatureAuthorizationModule],
  controllers: [ServerFeatureRestaurantsController],
  providers: [ServerFeatureRestaurantsService],
  exports: [ServerFeatureRestaurantsService],
})
export class ServerFeatureRestaurantsModule {}
