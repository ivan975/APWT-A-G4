import { Get, Post, Put, Delete } from '@nestjs/common';

@Controller('admin')
export class AdminController {

  @Get()
  Something(): string {
    return 'Something';
  }

  @Post()
  Anything(): string {
    return 'Anything';
  }
}
