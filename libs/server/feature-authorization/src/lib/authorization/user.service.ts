import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SettingsServiceService } from '@planit/server/shared';
import {
  getUserData,
  UserData,
} from '@planit/server/feature-auth0-management-api';

@Injectable()
export class UserService {
  constructor(
    private readonly settingsService: SettingsServiceService,
    private configService: ConfigService
  ) {}

  async getUserInformation(uid: string): Promise<UserData> {
    const uuid = this.configService.get<string>('applicationId');
    const settings = await this.settingsService.getAppSettings(uuid);
    return getUserData(uid, settings.auth0ManagementApiToken);
  }
}
