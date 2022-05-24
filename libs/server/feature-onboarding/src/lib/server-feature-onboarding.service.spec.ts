import { Test } from '@nestjs/testing';
import { ServerFeatureOnboardingService } from './server-feature-onboarding.service';

describe('ServerFeatureOnboardingService', () => {
  let service: ServerFeatureOnboardingService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerFeatureOnboardingService],
    }).compile();

    service = module.get(ServerFeatureOnboardingService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
