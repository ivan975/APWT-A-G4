import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeController } from './employee/employee.controller';


@Module({
  imports: [EmployeeModule],

})
export class AppModule {}
