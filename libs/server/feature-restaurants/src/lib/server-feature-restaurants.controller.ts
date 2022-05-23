import { Controller, Get, Param } from '@nestjs/common';
import { ServerFeatureRestaurantsService } from './server-feature-restaurants.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Restaurant } from './entities/restaurant.entity';

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
  findOne(): Restaurant {
    return this.serverFeatureRestaurantsService.hello();
  }
}
