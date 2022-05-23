import { Test } from '@nestjs/testing';
import { ServerFeatureRestaurantsController } from './server-feature-restaurants.controller';
import { ServerFeatureRestaurantsService } from './server-feature-restaurants.service';

describe('ServerFeatureRestaurantsController', () => {
  let controller: ServerFeatureRestaurantsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerFeatureRestaurantsService],
      controllers: [ServerFeatureRestaurantsController],
    }).compile();

    controller = module.get(ServerFeatureRestaurantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
