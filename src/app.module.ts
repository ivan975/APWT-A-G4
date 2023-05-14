import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { EmployeeModule } from './employee/employee.module';
import { AdminIdMiddleware } from './admin/admin.middleware';

@Module({
  imports: [AdminModule, EmployeeModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'game_distribution',
    autoLoadEntities: true,
    synchronize: true
  })],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AdminIdMiddleware).forRoutes('*');
  }
}
