import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Admin } from './admin.entity';
import { EmployeeService } from 'src/employee/employee.service';
import { Employee } from 'src/employee/employee.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Admin, Employee])],
    controllers: [AdminController],
    providers: [AdminService, EmployeeService]
})
export class AdminModule {}
