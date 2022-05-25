import { Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import {
  CreateRestaurantDTO,
  GetRestaurantDTO,
  UpdateRestaurantDTO,
} from './dtos';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class ServerFeatureRestaurantsService {
  private readonly logger = new Logger(ServerFeatureRestaurantsService.name);

  constructor(
    @Inject('RESTAURANT_MODEL')
    private restaurantModel: Model<Restaurant>
  ) {}

  async findAll(): Promise<Restaurant[]> {
    this.logger.log('running findAll()');
    const restaurants = this.restaurantModel.find().exec();
    this.logger.debug(await restaurants);
    this.logger.log('successfully grabbed restaurants');
    return restaurants;
  }

  async create(createRestaurantDto: CreateRestaurantDTO): Promise<Restaurant> {
    this.logger.log(`running create(${createRestaurantDto})`);
    const createdRestaurant = new this.restaurantModel(createRestaurantDto);

    const saveResults = createdRestaurant.save();
    this.logger.log('successfully created restaurant');
    this.logger.debug(await saveResults);
    return saveResults;
  }

  async deleteRestaurantById(getRestaurantDto: GetRestaurantDTO) {
    this.logger.log(`running deleteRestaurantById(${getRestaurantDto})`);
    const deleteResults = this.restaurantModel.deleteOne({
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

    const updateResult = this.restaurantModel
      .updateOne({ _id: restaurantId }, updateRestaurantDto)
      .exec();

    this.logger.log('sucessfully updated restaurant');
    this.logger.debug(await updateResult);
    return updateResult;
  }
}
