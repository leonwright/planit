import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionsGuard implements CanActivate {
  private readonly logger = new Logger(PermissionsGuard.name);
  constructor(private reflector: Reflector) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    this.logger.debug('Checking permissions...');
    const [req] = context.getArgs();
    const userPermissions = req?.auth?.permissions || [];
    this.logger.debug(`User Permissions: ${userPermissions}`);
    const requiredPermissions =
      this.reflector.get('permissions', context.getHandler()) || [];
    this.logger.debug(`Required Permissions: ${requiredPermissions}`);

    const hasAllRequiredPermissions = requiredPermissions.every((permission) =>
      userPermissions.includes(permission)
    );

    this.logger.log(
      `has all required permissions: ${hasAllRequiredPermissions}`
    );

    if (requiredPermissions.length === 0 || hasAllRequiredPermissions) {
      return true;
    }

    throw new ForbiddenException('Insufficient Permissions');
  }
}
