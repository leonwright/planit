import {
  Resolver,
  Query,
  Mutation,
  Args,
  ObjectType,
  Field,
  Int,
  Context,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { CreateRestaurantDTO, UpdateRestaurantDTO } from './dtos';
import { Restaurant } from './entities/restaurant.entity';
import { ServerFeatureRestaurantsService } from './server-feature-restaurants.service';
import { DeleteResult, ObjectId, UpdateResult } from 'mongodb';
import { forwardRef, Inject, SetMetadata, UseGuards } from '@nestjs/common';
import {
  GqlAuthGuard,
  PermissionsGuard,
} from '@planit/server/feature-authorization';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  ServerFeatureTablesService,
  Table,
} from '@planit/server/feature-tables';

@ObjectType({ description: 'restaurnant ' })
class MongooseDeleteResult implements DeleteResult {
  @Field(() => Boolean, {
    description: 'acknowledgement that docs were deleted',
  })
  acknowledged: boolean;
  @Field(() => Int, { description: 'number of docs deleted' })
  deletedCount: number;
}

class MongooseUpdateResult implements UpdateResult {
  @Field(() => Boolean, {
    description: 'acknowledgement that docs were deleted',
  })
  acknowledged: boolean;
  matchedCount: number;
  modifiedCount: number;
  upsertedCount: number;
  upsertedId: ObjectId;
}

@Resolver(() => Restaurant)
export class RestaurantResolver {
  constructor(
    private readonly restaurantService: ServerFeatureRestaurantsService,
    @Inject(forwardRef(() => ServerFeatureTablesService))
    private tableService: ServerFeatureTablesService
  ) {}

  @Mutation(() => Restaurant)
  @UseGuards(GqlAuthGuard, PermissionsGuard)
  @SetMetadata('permissions', ['create:restaurant'])
  createRestaurant(
    @Args('createRestaurantDto') createRestaurantDto: CreateRestaurantDTO
  ) {
    return this.restaurantService.create(createRestaurantDto);
  }

  @Query(() => [Restaurant], { name: 'restaurants' })
  @UseGuards(GqlAuthGuard, PermissionsGuard)
  @SetMetadata('permissions', ['read:restaurants'])
  findAll() {
    return this.restaurantService.findAll();
  }

  @Query(() => Restaurant, { name: 'restaurant' })
  @UseGuards(GqlAuthGuard, PermissionsGuard)
  @SetMetadata('permissions', ['read:restaurants'])
  findRestaurantById(
    @Context() ctx: any,
    @Args('_id', { type: () => String }) id: string
  ) {
    return this.restaurantService.findById(id);
  }

  @Mutation(() => Restaurant)
  @UseGuards(GqlAuthGuard, PermissionsGuard)
  @SetMetadata('permissions', ['update:restaurant'])
  updateRestaurant(@Args('updateUserInput') dto: UpdateRestaurantDTO) {
    return this.restaurantService.updateRestaurantById(dto._id, dto);
  }

  @Mutation(() => MongooseDeleteResult)
  @UseGuards(GqlAuthGuard, PermissionsGuard)
  @SetMetadata('permissions', ['delete:restaurant'])
  deleteRestaurant(@Args('_id', { type: () => String }) id: string) {
    return this.restaurantService.deleteRestaurantById(id);
  }

  @ResolveField('tables', () => [Table], {
    description: 'all tables belonging to this restaurant',
  })
  async tables(@Parent() restaurant: Restaurant) {
    const { _id } = restaurant;
    return this.tableService.findById(_id.toString());
  }
}
