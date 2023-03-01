import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDto } from './auth-credentiasl.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signUp')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto) {
    return this.authService.signUp(authCredentialsDto);
    // console.log(authCredentialsDto);
  }
}
