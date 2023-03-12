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
} from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
//import { UsePipes } from '@nestjs/common/decorators/core/use-pipes.decorator';
import { createformdto } from './dto/create-employee.dto';
import { GetEmployeeFilterDto } from './dto/get-employee-filter.dto';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private EmployeeService: EmployeeService) {}

  @Get()
  getallusers(
    @Query(ValidationPipe) filterDto: GetEmployeeFilterDto,
  ): Employee[] {
    if (Object.keys(filterDto).length) {
    } else {
      return this.EmployeeService.getallusers();
    }
    return this.EmployeeService.getallusers();
  }

  @Get('/:id')
  getuserbyID(@Param('id') id: string): Employee {
    return this.EmployeeService.getuserbyID(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  creatfrom(@Body() createformdto: createformdto): Employee {
    return this.EmployeeService.createform(createformdto);
  }

  @Delete('/:id')
  deleteuser(@Param('id') id: string): void {
    this.EmployeeService.deleteuser(id);
  }

  @Patch('/:id/status')
  updateuserstatus(
    @Param('id') id: string,
    @Body('status') status: string,
  ): Employee {
    return this.EmployeeService.updateuserstatus(id, status);
  }
}
