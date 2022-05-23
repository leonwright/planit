import { Global, Module } from '@nestjs/common';
import { databaseProviders } from '../database.providers';

@Global()
@Module({
  controllers: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DataAccessModule {}
