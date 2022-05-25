import { Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { Settings } from './entities/settings.entity';

@Injectable()
export class SettingsServiceService {
  private readonly logger = new Logger(SettingsServiceService.name);

  constructor(
    @Inject('SETTINGS_MODEL')
    private settingsModel: Model<Settings>
  ) {}

  async init(uuid: string) {
    this.logger.log(`running init(${uuid})`);
    const updateResults = this.settingsModel
      .findOneAndUpdate({ uuid }, { uuid }, { upsert: true, new: true })
      .exec();
    this.logger.log('finished running init');
    return updateResults;
  }

  addAccessToken(uuid: string, accessToken: string) {
    this.logger.log(`running addAccessToken(${uuid})`);
    return this.settingsModel
      .updateOne({ uuid }, { auth0ManagementApiToken: accessToken, uuid })
      .exec();
  }

  async getAppSettings(uuid: string): Promise<Settings> {
    this.logger.log(`running getAppSettings(${uuid})`);
    return this.settingsModel.findOne({ uuid: uuid }).exec();
  }
}
