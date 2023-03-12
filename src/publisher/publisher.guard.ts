import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
@Injectable()
export class PublisherGuard implements CanActivate {
  public key = 'Ie7jpbnL4I';
  canActivate(context: ExecutionContext): boolean {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    if (request.header('key') == undefined) {
      return false;
    }
    return request.header('key') === this.key;
  }
}
