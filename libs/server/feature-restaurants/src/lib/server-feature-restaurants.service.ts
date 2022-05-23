import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {
  CreateRestaurantDTO,
  GetRestaurantDTO,
  UpdateRestaurantDTO,
} from './dtos';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class ServerFeatureRestaurantsService {
  constructor(
    @Inject('RESTAURANT_MODEL')
    private restaurantModel: Model<Restaurant>
  ) {}
  hello(): Partial<Restaurant> {
    return {
      name: 'Mamasitas',
      address: 'Cra 43D ## 10 - 77, Medellín, El Poblado, Medellín, Antioquia',
      description: 'Argentinian Restaurant in Manila',
    };
  }

  async findAll(): Promise<Restaurant[]> {
    return this.restaurantModel.find().exec();
  }

  async create(createRestaurantDto: CreateRestaurantDTO): Promise<Restaurant> {
    const createdRestaurant = new this.restaurantModel(createRestaurantDto);
    return createdRestaurant.save();
  }

  async deleteRestaurantById(getRestaurantDto: GetRestaurantDTO) {
    return this.restaurantModel.deleteOne({
      _id: getRestaurantDto.restaurantId,
    });
  }

  async updateRestaurantById(
    restaurantId: string,
    updateRestaurantDto: UpdateRestaurantDTO
  ) {
    return this.restaurantModel.updateOne(
      { _id: restaurantId },
      updateRestaurantDto
    );
  }
}
