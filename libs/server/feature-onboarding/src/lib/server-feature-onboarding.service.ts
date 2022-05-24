import { Injectable } from '@nestjs/common';
import { OnboardingSteps } from './steps.enum';
import { UserService } from '@planit/server/feature-authorization';

@Injectable()
export class ServerFeatureOnboardingService {
  constructor(private readonly userService: UserService) {}

  async getOnboardingStatus(uid: string): Promise<OnboardingSteps> {
    const userData = await this.userService.getUserInformation(uid);

    if (userData.user_metadata.fresh_account) {
      return OnboardingSteps.NeedsSetup;
    }

    return OnboardingSteps.SetupComplete;
  }
}
