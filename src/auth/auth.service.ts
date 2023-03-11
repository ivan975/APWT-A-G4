import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './auth-credentiasl.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  // async validateUserPassword(authCredentialsDto: AuthCredentialsDto) {
  //   const { username, password } = authCredentialsDto;

  //   // const user = await this.userRepo.findOneBy({ username: username });
  //   const user = await this.userRepo.findOneBy({ username: username });

  //   if (user && user.validatePassword(password)) {
  //     return user.username;
  //   }
  // }

  // async signIn(authCredentialsDto: AuthCredentialsDto) {
  //   const username = await this.validateUserPassword(authCredentialsDto);

  //   if (!username) {
  //     throw new UnauthorizedException('Invalid Credentials');
  //   }
  // }
  async signUp(authCredentialsDto: AuthCredentialsDto) {
    const salt = await bcrypt.genSalt();
    const hassedpassed = await bcrypt.hash(authCredentialsDto.password, salt);
    authCredentialsDto.password = hassedpassed;
    return await this.userRepo.save(authCredentialsDto);
  }

  // async signIn(authCredentialsDto: AuthCredentialsDto) {
  //   const myData = await this.userRepo.findOneBy({
  //     password: authCredentialsDto.password,
  //   });
  //   const isMatch = await bcrypt.compare(
  //     authCredentialsDto.password,
  //     myData.password,
  //   );

  //   if (isMatch) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // }
  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
