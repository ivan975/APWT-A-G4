import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
  Patch,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { createformdto } from './dto/create-employee.dto';
import { GetEmployeeFilterDto } from './dto/get-employee-filter.dto';

import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private EmployeeService: EmployeeService) {}

  @Get('/abc')
  index():any {
    return 'akla';
  }

  @Get('/xyz')
  getuser(@Query(ValidationPipe) filterDto: GetEmployeeFilterDto): Promise<any> {
    return this.EmployeeService.getuser(filterDto);
  }

  @Get('/:id')
  getuserbyID(@Param('id', ParseIntPipe) id: number): any {
    return this.EmployeeService.getuserbyID(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  creatfrom(@Body() createformdto: createformdto): any {
    return this.EmployeeService.createform(createformdto);
  }

  @Delete('/:id')
  deleteuser(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.EmployeeService.deleteuser(id);
  }

  @Patch('/:id/status')
  updateuserstatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', ValidationPipe) status: string
  ): any {
    return this.EmployeeService.updateuserstatus(id, status);
  }

  
}
