import { Module } from '@nestjs/common';
import { settingsProviders } from './providers/settings.providers';
import { SettingsServiceService } from './settings-service.service';

@Module({
  providers: [SettingsServiceService, ...settingsProviders],
  exports: [SettingsServiceService, ...settingsProviders],
})
export class ApplicationSettingsModule {}
