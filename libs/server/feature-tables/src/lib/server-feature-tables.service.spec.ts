import { Test } from '@nestjs/testing';
import { ServerFeatureTablesService } from './server-feature-tables.service';

describe('ServerFeatureTablesService', () => {
  let service: ServerFeatureTablesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerFeatureTablesService],
    }).compile();

    service = module.get(ServerFeatureTablesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
