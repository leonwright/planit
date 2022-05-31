import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { expressJwtSecret } from 'jwks-rsa';
import { expressjwt as jwt, GetVerificationKey } from 'express-jwt';
import { promisify } from 'util';

@Injectable()
export class GqlAuthGuard implements CanActivate {
  private readonly logger = new Logger(GqlAuthGuard.name);

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();

    if (!ctx.req.headers?.authorization) {
      return false;
    }

    ctx.user = await this.verifyToken(ctx);
    ctx.auth = ctx.req.auth;
    return true;
  }

  async verifyToken(ctx: any) {
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
      await checkJwt(ctx.req, ctx.res);
      this.logger.log('User authenticated.');
      return true;
    } catch (error) {
      this.logger.error('There was an error authenticating the user.', error);
      throw new UnauthorizedException(error);
    }
  }
}
