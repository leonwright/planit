import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthorizationGuard } from '@planit/server/feature-authorization';
import { ServerFeatureOnboardingService } from './server-feature-onboarding.service';
import { OnboardingSteps } from './steps.enum';

@ApiBearerAuth()
@ApiTags('onboarding')
@Controller('onboarding')
export class ServerFeatureOnboardingController {
  constructor(
    private serverFeatureOnboardingService: ServerFeatureOnboardingService
  ) {}

  @Get('status')
  @ApiResponse({
    status: 200,
    description: 'The status number of the users onboarding status',
  })
  @UseGuards(AuthorizationGuard)
  getOnboardingStatus(@Req() request: any): Promise<OnboardingSteps> {
    console.log(request.auth.sub);
    return this.serverFeatureOnboardingService.getOnboardingStatus(
      request.auth.sub
    );
  }
}
