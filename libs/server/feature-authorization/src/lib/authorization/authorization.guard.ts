import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { expressJwtSecret } from 'jwks-rsa';
import { expressjwt as jwt, GetVerificationKey } from 'express-jwt';
import { promisify } from 'util';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  private readonly logger = new Logger(AuthorizationGuard.name);

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.getArgByIndex(0);
    const res = context.getArgByIndex(1);

    this.logger.debug('Checking authentication...');

    const checkJwt = promisify(
      jwt({
        secret: expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://plan-it.us.auth0.com/.well-known/jwks.json',
        }) as GetVerificationKey,
        audience: 'https://api.planit.applictasy.com',
        issuer: 'https://plan-it.us.auth0.com/',
        algorithms: ['RS256'],
      })
    );
    try {
      await checkJwt(req, res);
      this.logger.log('User authenticated.');
      return true;
    } catch (error) {
      this.logger.error('There was an error authenticating the user.', error);
      throw new UnauthorizedException(error);
    }
  }
}
