import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SetMetadata, UseGuards } from '@nestjs/common';
import {
  GqlAuthGuard,
  PermissionsGuard,
} from '@planit/server/feature-authorization';
import { Table } from './entities/table.entity';
import { ServerFeatureTablesService } from './server-feature-tables.service';
import { CreateTableDTO } from './dtos';

@Resolver(() => Table)
export class TableResolver {
  constructor(private readonly tableService: ServerFeatureTablesService) {}

  @Mutation(() => Table)
  @UseGuards(GqlAuthGuard, PermissionsGuard)
  @SetMetadata('permissions', ['create:table'])
  createTable(@Args('createTableDto') createTableDto: CreateTableDTO) {
    return this.tableService.create(createTableDto);
  }

  @Query(() => [Table], { name: 'tables' })
  @UseGuards(GqlAuthGuard, PermissionsGuard)
  @SetMetadata('permissions', ['read:tables'])
  findAll() {
    return this.tableService.findAll();
  }
}
