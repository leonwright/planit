import { Injectable } from '@nestjs/common';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class ServerFeatureRestaurantsService {
  hello(): Restaurant {
    return {
      name: 'Mamasitas',
      address: 'Cra 43D ## 10 - 77, Medellín, El Poblado, Medellín, Antioquia',
    };
  }
}
