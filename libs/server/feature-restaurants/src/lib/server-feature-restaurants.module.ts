import { forwardRef, Module } from '@nestjs/common';
import { ServerFeatureAuthorizationModule } from '@planit/server/feature-authorization';
import { ServerFeatureTablesModule } from '@planit/server/feature-tables';
import { restaurantProviders } from './providers/restaurant.providers';
import { RestaurantResolver } from './restaurants.resolver';
import { ServerFeatureRestaurantsController } from './server-feature-restaurants.controller';
import { ServerFeatureRestaurantsService } from './server-feature-restaurants.service';

@Module({
  imports: [
    ServerFeatureAuthorizationModule,
    forwardRef(() => ServerFeatureTablesModule),
  ],
  controllers: [ServerFeatureRestaurantsController],
  providers: [
    ServerFeatureRestaurantsService,
    ...restaurantProviders,
    RestaurantResolver,
  ],
  exports: [
    ServerFeatureRestaurantsService,
    ...restaurantProviders,
    RestaurantResolver,
  ],
})
export class ServerFeatureRestaurantsModule {}
