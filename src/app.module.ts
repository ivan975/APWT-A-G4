import { Module } from '@nestjs/common';
import { PublisherController } from './publisher/publisher.controller';

@Module({
  imports: [],
  controllers: [PublisherController],
})
export class AppModule {}
