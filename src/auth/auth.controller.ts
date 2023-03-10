import { Body, Controller, Get, Post, Session } from '@nestjs/common';
import { AuthCredentialsDto } from './auth-credentiasl.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signUp')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto) {
    return this.authService.signUp(authCredentialsDto);
  }

  @Get('/signIn')
  signIn(@Session() session, @Body() authCredentialsDto: AuthCredentialsDto) {
    if (this.authService.signIn(authCredentialsDto)) {
      session.username = authCredentialsDto.username;
      session.password = authCredentialsDto.password;
      return { message: 'success' };
    } else {
      return { message: 'Invalid credentials' };
    }
  }
}
