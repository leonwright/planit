import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  ApplicationSettingsModule,
  configuration,
} from '@planit/server/shared';
import { UserService } from './authorization/user.service';

@Module({
  imports: [
    ApplicationSettingsModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class ServerFeatureAuthorizationModule {}
