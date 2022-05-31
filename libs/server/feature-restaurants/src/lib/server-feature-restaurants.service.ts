import { Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateRestaurantDTO, UpdateRestaurantDTO } from './dtos';
import { Restaurant } from './entities/restaurant.entity';
import { DeleteResult, UpdateResult } from 'mongodb';

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

  async exists(_id: string) {
    this.logger.log(`checking if restaruant: ${_id} exists.`);
    const restaurantExists = this.restaurantModel.exists({ _id }).exec();
    this.logger.debug((await restaurantExists) !== null);
    return (await restaurantExists) !== null;
  }

  async findById(_id: string): Promise<Restaurant> {
    this.logger.log('running findAll()');
    const restaurant = this.restaurantModel.findById(_id).exec();
    this.logger.debug(await restaurant);
    this.logger.log('successfully grabbed restaurants');
    return restaurant;
  }

  async create(createRestaurantDto: CreateRestaurantDTO): Promise<Restaurant> {
    this.logger.log(`running create()`);
    const createdRestaurant = new this.restaurantModel(createRestaurantDto);

    const saveResults = createdRestaurant.save();
    this.logger.log('successfully created restaurant');
    this.logger.debug(await saveResults);
    return saveResults;
  }

  async deleteRestaurantById(_id: string): Promise<DeleteResult> {
    this.logger.log(`running deleteRestaurantById(${_id})`);
    const deleteResults = this.restaurantModel
      .deleteOne({
        _id: _id,
      })
      .exec();
    this.logger.log('sucessfully deleted restaurant.');
    return deleteResults;
  }

  async updateRestaurantById(
    restaurantId: string,
    updateRestaurantDto: UpdateRestaurantDTO
  ): Promise<UpdateResult> {
    this.logger.log(`running updateRestaurantById(${restaurantId})`);

    const updateResult = this.restaurantModel
      .updateOne({ _id: restaurantId }, updateRestaurantDto)
      .exec();

    this.logger.log('sucessfully updated restaurant');
    this.logger.debug(await updateResult);
    return updateResult;
  }
}
