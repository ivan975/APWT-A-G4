import { Module } from '@nestjs/common';
import { PublisherController } from './publisher/publisher.controller';
import { PublisherService } from './publisher/publisher.service';

@Module({
  imports: [],
  controllers: [PublisherController],
  providers: [PublisherService],
})
export class AppModule {}
