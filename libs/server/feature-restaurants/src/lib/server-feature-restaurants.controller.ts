import { Controller, Get, Param, SetMetadata, UseGuards } from '@nestjs/common';
import { ServerFeatureRestaurantsService } from './server-feature-restaurants.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Restaurant } from './entities/restaurant.entity';
import {
  AuthorizationGuard,
  PermissionsGuard,
} from '@planit/server/feature-authorization';

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
  findOne(): Restaurant {
    return this.serverFeatureRestaurantsService.hello();
  }
}
