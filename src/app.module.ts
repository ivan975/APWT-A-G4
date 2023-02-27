import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { PublisherModule } from './publisher/publisher.module';

@Module({
  imports: [PublisherModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
