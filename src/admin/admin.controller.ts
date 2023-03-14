import { Controller, Get, Post, Put, Delete, Body, Param, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { EmployeeService } from 'src/employee/employee.service';
import { CreateAdmin } from './adminForm.dto';
import { CreateEmployee } from './adminForm.dto'


@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService, private employeeService: EmployeeService) {}

    @Get()
    getIndexAdmin(): any {
        return this.adminService.showIndex();
    }

    @Post('createAdmin')
    @UsePipes(new ValidationPipe())
    createAdmin(@Body() mydto: CreateAdmin): any {
        return this.adminService.insertUserAdmin(mydto);
    }

    @Get('userList')
    findAll(): string {
        return 'User Category: \n1. Employee \n2. Publisher \n3. Customer'
    }

    /* Employee Routes */
    
    @Post('userList/employee/insert')
    @UsePipes(new ValidationPipe())
    insertEmployee(@Body() empdto: CreateEmployee): any {
        return this.employeeService.insertEmployee(empdto);
    }

    @Get('userList/employee')
    getAllEmp(): any {
        return this.employeeService.showAllEmp()
    }

    @Get('userList/employee/find')
    findEmp(@Query() qry): any {
        return this.employeeService.showEmpByIDName(qry)
    }
    
    @Put('userList/employee/update:id')
    @UsePipes(new ValidationPipe())
    updateEmpByID(@Body() empdto: CreateEmployee, @Param('id', ParseIntPipe) id): any {
        return this.employeeService.updateEmployeeByID(empdto, id);
    }
    
}
