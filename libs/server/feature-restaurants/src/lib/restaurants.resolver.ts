import {
  Resolver,
  Query,
  Mutation,
  Args,
  ObjectType,
  Field,
} from '@nestjs/graphql';
import { CreateRestaurantDTO, UpdateRestaurantDTO } from './dtos';
import { Restaurant } from './entities/restaurant.entity';
import { ServerFeatureRestaurantsService } from './server-feature-restaurants.service';
import { DeleteResult, UpdateResult } from 'mongodb';

@ObjectType({ description: 'restaurnant ' })
class MongooseDeleteResult implements DeleteResult {
  @Field(() => String, {
    description: 'acknowledgement that docs were deleted',
  })
  acknowledged: boolean;
  @Field(() => String, { description: 'number of docs deleted' })
  deletedCount: number;
}

@Resolver(() => Restaurant)
export class RestaurantResolver {
  constructor(
    private readonly restaurantService: ServerFeatureRestaurantsService
  ) {}

  @Mutation(() => Restaurant)
  createRestaurant(
    @Args('createRestaurantDto') createRestaurantDto: CreateRestaurantDTO
  ) {
    return this.restaurantService.create(createRestaurantDto);
  }

  @Query(() => [Restaurant], { name: 'restaurants' })
  findAll() {
    return this.restaurantService.findAll();
  }

  @Query(() => Restaurant, { name: 'restaurant' })
  findRestaurantById(@Args('_id', { type: () => String }) id: string) {
    return this.restaurantService.findById(id);
  }

  @Mutation(() => Restaurant)
  updateRestaurant(@Args('updateUserInput') dto: UpdateRestaurantDTO) {
    return this.restaurantService.updateRestaurantById(dto._id, dto);
  }

  @Mutation(() => MongooseDeleteResult)
  deleteRestaurant(@Args('_id', { type: () => String }) id: string) {
    return this.restaurantService.deleteRestaurantById(id);
  }
}
