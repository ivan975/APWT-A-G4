import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './auth-credentiasl.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private mailerService: MailerService,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto) {
    const salt = await bcrypt.genSalt();
    const hassedpassed = await bcrypt.hash(authCredentialsDto.password, salt);
    authCredentialsDto.password = hassedpassed;
    return await this.userRepo.save(authCredentialsDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto) {
    const myData = await this.userRepo.findOneBy({
      email: authCredentialsDto.email,
    });

    const isMatch = await bcrypt.compare(
      authCredentialsDto.password,
      myData.password,
    );

    if (isMatch) {
      return 1;
    } else {
      return 0;
    }
  }
  async sendEmail(myData) {
    return await this.mailerService.sendMail({
      to: 'rakib.ivan100@gmail.com',
      subject: myData.subject,
      text: myData.text,
    });
  }
}
