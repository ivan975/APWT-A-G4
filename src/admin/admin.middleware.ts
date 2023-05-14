import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AdminIdMiddleware implements NestMiddleware {
    use(req, _res, next) {
        req.adminId = req.session.adminId;
        next();
    }
}
