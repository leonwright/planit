import { Controller } from '@nestjs/common';
import { ServerFeatureTablesService } from './server-feature-tables.service';

@Controller('server-feature-tables')
export class ServerFeatureTablesController {
  constructor(private serverFeatureTablesService: ServerFeatureTablesService) {}
}
