import { Test } from '@nestjs/testing';
import { ServerFeatureTablesController } from './server-feature-tables.controller';
import { ServerFeatureTablesService } from './server-feature-tables.service';

describe('ServerFeatureTablesController', () => {
  let controller: ServerFeatureTablesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerFeatureTablesService],
      controllers: [ServerFeatureTablesController],
    }).compile();

    controller = module.get(ServerFeatureTablesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
