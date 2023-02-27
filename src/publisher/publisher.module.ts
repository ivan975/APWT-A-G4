import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { PublisherController } from './publisher.controller';
import { PublisherService } from './publisher.service';

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  controllers: [PublisherController],
  providers: [PublisherService],
})
export class PublisherModule {}
