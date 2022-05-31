import { Module } from '@nestjs/common';
import { ServerFeatureTablesController } from './server-feature-tables.controller';
import { ServerFeatureTablesService } from './server-feature-tables.service';

@Module({
  controllers: [ServerFeatureTablesController],
  providers: [ServerFeatureTablesService],
  exports: [ServerFeatureTablesService],
})
export class ServerFeatureTablesModule {}
