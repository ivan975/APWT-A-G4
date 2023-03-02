import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './auth-credentiasl.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signUp')
  signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {
    return this.authService.signUp(authCredentialsDto);
  }

  @Get('signIn')
  signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {
    if (this.authService.signIn(authCredentialsDto)) {
      return { message: 'success' };
    } else {
      return { message: 'Invalid credentials' };
    }
  }
}
