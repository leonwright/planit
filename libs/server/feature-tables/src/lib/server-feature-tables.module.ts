import { Module, forwardRef } from '@nestjs/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ServerFeatureRestaurantsModule } from '@planit/server/feature-restaurants';
import { tableProviders } from './providers/table.providers';
import { ServerFeatureTablesService } from './server-feature-tables.service';
import { TableResolver } from './tables.resolver';

@Module({
  imports: [forwardRef(() => ServerFeatureRestaurantsModule)],
  controllers: [],
  providers: [ServerFeatureTablesService, ...tableProviders, TableResolver],
  exports: [ServerFeatureTablesService, ...tableProviders, TableResolver],
})
export class ServerFeatureTablesModule {}
