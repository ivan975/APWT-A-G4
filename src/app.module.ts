import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { PublisherController } from './publisher/publisher.controller';
import { PublisherService } from './publisher/publisher.service';
import { PublisherModule } from './publisher/publisher.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), PublisherModule],
  controllers: [PublisherController],
  providers: [PublisherService],
})
export class AppModule {}
