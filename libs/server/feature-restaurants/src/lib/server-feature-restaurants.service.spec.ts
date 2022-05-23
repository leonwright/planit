import { Test } from '@nestjs/testing';
import { ServerFeatureRestaurantsService } from './server-feature-restaurants.service';

describe('ServerFeatureRestaurantsService', () => {
  let service: ServerFeatureRestaurantsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerFeatureRestaurantsService],
    }).compile();

    service = module.get(ServerFeatureRestaurantsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
