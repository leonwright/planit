import { Module } from '@nestjs/common';
import { ServerFeatureRestaurantsController } from './server-feature-restaurants.controller';
import { ServerFeatureRestaurantsService } from './server-feature-restaurants.service';

@Module({
  controllers: [ServerFeatureRestaurantsController],
  providers: [ServerFeatureRestaurantsService],
  exports: [ServerFeatureRestaurantsService],
})
export class ServerFeatureRestaurantsModule {}
