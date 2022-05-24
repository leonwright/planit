import { Injectable } from '@nestjs/common';
import { SettingsServiceService } from '@planit/server/shared';
import { ConfigService } from '@nestjs/config';
import { OnboardingSteps } from './steps.enum';
import { getUserData } from '@planit/server/feature-auth0-management-api';

@Injectable()
export class ServerFeatureOnboardingService {
  constructor(
    private readonly settingsService: SettingsServiceService,
    private configService: ConfigService
  ) {}

  async getOnboardingStatus(uid: string): Promise<OnboardingSteps> {
    const uuid = this.configService.get<string>('applicationId');
    const settings = await this.settingsService.getAppSettings(uuid);
    const userData = await getUserData(uid, settings.auth0ManagementApiToken);

    console.log(userData);

    if (userData.user_metadata.fresh_account) {
      return OnboardingSteps.NeedsSetup;
    }

    return OnboardingSteps.SetupComplete;
  }
}
