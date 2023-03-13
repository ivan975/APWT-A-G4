import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from 'src/publisher/game.entity';
import { PublisherController } from 'src/publisher/publisher.controller';
import { PublisherService } from 'src/publisher/publisher.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from './user.entity';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        ignoreTLS: true,
        secure: true,
        auth: {
          user: 'scorpioquanchi@gmail.com',
          pass: 'qczvebtijvsrlrig',
        },
      },
    }),
    TypeOrmModule.forFeature([User, Game]),
  ],
  controllers: [AuthController],
  providers: [AuthService, PublisherService],
})
export class AuthModule {}
