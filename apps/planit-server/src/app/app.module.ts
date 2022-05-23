import { Module } from '@nestjs/common';
import { ServerFeatureRestaurantsModule } from '@planit/server/feature-restaurants';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ServerFeatureRestaurantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
