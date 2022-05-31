import {
  forwardRef,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ServerFeatureRestaurantsService } from '@planit/server/feature-restaurants';
import { Model } from 'mongoose';
import { CreateTableDTO } from './dtos';
import { Table } from './entities/table.entity';

@Injectable()
export class ServerFeatureTablesService {
  private readonly logger = new Logger(ServerFeatureTablesService.name);

  constructor(
    @Inject('TABLE_MODEL')
    private tableModel: Model<Table>,
    @Inject(forwardRef(() => ServerFeatureRestaurantsService))
    private restaurantService: ServerFeatureRestaurantsService
  ) {}

  async findAll(): Promise<Table[]> {
    this.logger.log('running findAll()');
    const tables = this.tableModel.find().exec();
    this.logger.debug(await tables);
    this.logger.log('successfully grabbed tables');
    return tables;
  }

  async findById(_id: string): Promise<Table[]> {
    this.logger.log('running findAll()');
    const tables = this.tableModel.find({ restaurantId: _id }).exec();
    this.logger.debug(await tables);
    this.logger.log('successfully grabbed tables');
    return tables;
  }

  async create(createTableDto: CreateTableDTO): Promise<Table> {
    this.logger.log(`running create(${createTableDto.restaurantId})`);
    const createdTable = new this.tableModel(createTableDto);

    if (!(await this.restaurantService.exists(createTableDto.restaurantId))) {
      throw new NotFoundException('restaurant does not exist');
    }

    const saveResults = createdTable.save();
    this.logger.log('successfully created table');
    this.logger.debug(await saveResults);
    return saveResults;
  }
}
