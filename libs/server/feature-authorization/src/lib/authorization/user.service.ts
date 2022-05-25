import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SettingsServiceService } from '@planit/server/shared';
import {
  getUserData,
  UserData,
} from '@planit/server/feature-auth0-management-api';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(
    private readonly settingsService: SettingsServiceService,
    private configService: ConfigService
  ) {}

  async getUserInformation(uid: string): Promise<UserData> {
    this.logger.log('Getting user information.');
    const uuid = this.configService.get<string>('applicationId');
    const settings = await this.settingsService.getAppSettings(uuid);
    const info = await getUserData(uid, settings.auth0ManagementApiToken);
    this.logger.log('Successfully got user info');
    this.logger.debug(info);
    return info;
  }
}
