import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  ParseFilePipe,
  Post,
  Session,
  UnauthorizedException,
  UploadedFile,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AuthCredentialsDto } from './auth-credentiasl.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signUp')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploadedImage',
        filename: function (_req, file, cb) {
          cb(null, Date.now() + file.originalname);
        },
      }),
    }),
  )
  async signUp(
    @Body() authCredentialsDto: AuthCredentialsDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'png|jpg|jpeg|' })],
      }),
    )
    file: Express.Multer.File,
  ) {
    authCredentialsDto.filename = file.filename;
    return await this.authService.signUp(authCredentialsDto);
  }

  @Get('/signIn')
  async signIn(
    @Session() session,
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ) {
    const found = await this.authService.signIn(authCredentialsDto);
    if (found) {
      session.email = authCredentialsDto.email;
      console.log(session.email);
      return { message: 'Logged In' };
    } else {
      return { message: 'Invalid Credentials' };
    }
  }
  @Get('/signOut')
  signOut(@Session() session) {
    if (session.destroy()) {
      return { message: 'Logged Out Successfully' };
    } else {
      throw new UnauthorizedException('Error 404!!!');
    }
  }
  @Post('/email')
  sendEmail(@Body() myData) {
    return this.authService.sendEmail(myData);
  }
}
