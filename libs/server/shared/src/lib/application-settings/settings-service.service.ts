import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Settings } from './entities/settings.entity';

@Injectable()
export class SettingsServiceService {
  constructor(
    @Inject('SETTINGS_MODEL')
    private settingsModel: Model<Settings>
  ) {}

  init(uuid: string) {
    return this.settingsModel
      .findOneAndUpdate({ uuid }, { uuid }, { upsert: true, new: true })
      .exec();
  }

  addAccessToken(uuid: string, accessToken: string) {
    return this.settingsModel
      .updateOne({ uuid }, { auth0ManagementApiToken: accessToken, uuid })
      .exec();
  }

  async getAppSettings(uuid: string): Promise<Settings> {
    return this.settingsModel.findOne({ uuid: uuid }).exec();
  }
}
