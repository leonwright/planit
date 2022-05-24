import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron } from '@nestjs/schedule';
import {
  getManagementApiToken,
  ApiCredentials,
} from '@planit/server/feature-auth0-management-api';
import { SettingsServiceService } from '@planit/server/shared';

@Injectable()
export class AppService {
  constructor(
    private readonly settingsService: SettingsServiceService,
    private configService: ConfigService
  ) {}
  private readonly logger = new Logger(AppService.name);
  getData(): { message: string } {
    return { message: 'Welcome to planit-server!' };
  }

  @Cron('*/59  * * * * ', {
    name: 'get-management-api-token',
  })
  async getManagementApiToken() {
    this.logger.log('Getting Management API Token...');
    try {
      const credentials: ApiCredentials = {
        client_id: this.configService.get<string>('auth0ClientId'),
        client_secret: this.configService.get<string>('auth0ClientSecret'),
      };
      const response = await getManagementApiToken(credentials);
      this.settingsService.addAccessToken(
        'leons-mackbook',
        response.access_token
      );
      this.logger.log('Successfully got Management API Token');
    } catch (e) {
      this.logger.error(e);
    }
  }
}
