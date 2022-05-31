import { Connection } from 'mongoose';
import { RestaurantSchema } from './../entities/restaurant.entity';

export const restaurantProviders = [
  {
    provide: 'RESTAURANT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Restaurant', RestaurantSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
