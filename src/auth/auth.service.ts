import { Injectable, UnauthorizedException } from '@nestjs/common';
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
    const hashedpassword = await bcrypt.hash(authCredentialsDto.password, salt);
    authCredentialsDto.password = hashedpassword;
    return await this.userRepo.save(authCredentialsDto);
  }

  async signIn(userDto) {
    const { email, password } = userDto;
    const user = await this.userRepo.findOneBy({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    } else {
      throw new UnauthorizedException('Enter Valid Credentials');
    }
  }
  async sendEmail(myData) {
    return await this.mailerService.sendMail({
      to: myData.to,
      subject: myData.subject,
      text: myData.text,
    });
  }
  getGamesByUserID(id): any {
    return this.userRepo.find({
      where: { id: id },
      relations: {
        games: true,
      },
    });
  }
}
