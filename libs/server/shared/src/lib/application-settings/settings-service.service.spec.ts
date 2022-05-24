import { Test, TestingModule } from '@nestjs/testing';
import { SettingsServiceService } from './settings-service.service';

describe('SettingsServiceService', () => {
  let service: SettingsServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SettingsServiceService],
    }).compile();

    service = module.get<SettingsServiceService>(SettingsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
