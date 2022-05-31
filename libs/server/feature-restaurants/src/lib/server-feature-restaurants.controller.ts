import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { ServerFeatureRestaurantsService } from './server-feature-restaurants.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Restaurant } from './entities/restaurant.entity';
import {
  AuthorizationGuard,
  PermissionsGuard,
} from '@planit/server/feature-authorization';
import {
  CreateRestaurantDTO,
  GetRestaurantDTO,
  UpdateRestaurantDTO,
} from './dtos';

@ApiBearerAuth()
@ApiTags('restaurants')
@Controller('restaurants')
export class ServerFeatureRestaurantsController {
  constructor(
    private serverFeatureRestaurantsService: ServerFeatureRestaurantsService
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Restaurant,
  })
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['read:restaurants'])
  findOne(): Promise<Restaurant[]> {
    return this.serverFeatureRestaurantsService.findAll();
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The Created Record',
    type: Restaurant,
  })
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['create:restaurant'])
  createRestaurant(@Body() dto: CreateRestaurantDTO): Promise<Restaurant> {
    return this.serverFeatureRestaurantsService.create(dto);
  }

  @Delete(':restaurantId')
  @ApiResponse({
    status: 200,
    description: 'The deleted Record',
  })
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['delete:restaurant'])
  deleteRestaurant(@Param() params: GetRestaurantDTO) {
    return this.serverFeatureRestaurantsService.deleteRestaurantById(
      params.restaurantId
    );
  }

  @Put()
  @ApiResponse({
    status: 200,
    description: 'The updated Record',
  })
  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['update:restaurant'])
  updateRestaurant(@Body() body: UpdateRestaurantDTO) {
    return this.serverFeatureRestaurantsService.updateRestaurantById(
      body._id,
      body
    );
  }
}
