import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { UsersController } from './user/users.controller';

@Module({
  imports: [],
  controllers: [AppController, AdminController, UsersController],
  providers: [AppService],
})
export class AppModule {}
