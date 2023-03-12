import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Employee} from './employee.model';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
