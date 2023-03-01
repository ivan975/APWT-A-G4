import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './auth-credentiasl.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto) {
    const user = new User();
    user.username = authCredentialsDto.username;
    user.password = authCredentialsDto.password;

    return await this.userRepo.save(user);
  }
}
