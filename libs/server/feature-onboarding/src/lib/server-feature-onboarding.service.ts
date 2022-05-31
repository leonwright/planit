import { Injectable } from '@nestjs/common';
import { OnboardingSteps } from './steps.enum';
import { UserService } from '@planit/server/feature-authorization';
import { OnboardingStatus } from './onboarding.entity';

@Injectable()
export class ServerFeatureOnboardingService {
  constructor(private readonly userService: UserService) {}

  async getOnboardingStatus(uid: string): Promise<OnboardingStatus> {
    const userData = await this.userService.getUserInformation(uid);
    const status = new OnboardingStatus();

    if (userData.user_metadata.fresh_account) {
      status.status = 'create_restaturant';
      return status;
    }

    status.status = 'complete';
    return status;
  }
}
