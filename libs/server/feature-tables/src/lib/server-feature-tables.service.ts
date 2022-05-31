import { Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateTableDTO, GetRestaurantDTO, UpdateRestaurantDTO } from './dtos';
import { Table } from './entities/table.entity';

@Injectable()
export class ServerFeatureTablesService {
  private readonly logger = new Logger(ServerFeatureTablesService.name);

  constructor(
    @Inject('TABLE_MODEL')
    private tableModel: Model<Table>
  ) {}

  async findAll(): Promise<Table[]> {
    this.logger.log('running findAll()');
    const tables = this.tableModel.find().exec();
    this.logger.debug(await tables);
    this.logger.log('successfully grabbed tables');
    return tables;
  }

  async create(createTableDto: CreateTableDTO): Promise<Table> {
    this.logger.log(`running create(${createTableDto})`);
    const createdTable = new this.tableModel(createTableDto);

    const saveResults = createdTable.save();
    this.logger.log('successfully created table');
    this.logger.debug(await saveResults);
    return saveResults;
  }

  async deleteRestaurantById(getRestaurantDto: GetRestaurantDTO) {
    this.logger.log(`running deleteRestaurantById(${getRestaurantDto})`);
    const deleteResults = this.tableModel.deleteOne({
      _id: getRestaurantDto.restaurantId,
    });
    this.logger.log('sucessfully deleted restaurant.');
    return deleteResults;
  }

  async updateRestaurantById(
    restaurantId: string,
    updateRestaurantDto: UpdateRestaurantDTO
  ) {
    this.logger.log(
      `running updateRestaurantById(${restaurantId}, ${updateRestaurantDto})`
    );

    const updateResult = this.tableModel
      .updateOne({ _id: restaurantId }, updateRestaurantDto)
      .exec();

    this.logger.log('sucessfully updated restaurant');
    this.logger.debug(await updateResult);
    return updateResult;
  }
}
