import { Test } from '@nestjs/testing';
import { ServerFeatureOnboardingController } from './server-feature-onboarding.controller';
import { ServerFeatureOnboardingService } from './server-feature-onboarding.service';

describe('ServerFeatureOnboardingController', () => {
  let controller: ServerFeatureOnboardingController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerFeatureOnboardingService],
      controllers: [ServerFeatureOnboardingController],
    }).compile();

    controller = module.get(ServerFeatureOnboardingController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
