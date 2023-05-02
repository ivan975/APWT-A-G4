import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, ValidationPipe, ParseIntPipe, Session, UseGuards, UnauthorizedException } from '@nestjs/common';
import { AdminService } from './admin.service';
import { EmployeeService } from 'src/employee/employee.service';
import { CreateAdmin } from './adminForm.dto';
import { CreateEmployee } from './adminForm.dto'
import { SessionGuard } from './session.guard';


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

    @Post('/signin')
    @UsePipes(new ValidationPipe())
    async signin(@Session() session, @Body() mydto:CreateAdmin) {
        const res = await (this.adminService.signin(mydto));
        if(res==true) {
            session.name = mydto.name;
            return (session.name);
        } else {
            throw new UnauthorizedException({ message: "invalid credentials" });
        }
    }
    
    @Get('/signout')
    signout(@Session() session) {
        if(session.destroy()) {
            return {message:"you are logged out"};
        } else {
            throw new UnauthorizedException("invalid actions");
        }
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

    @Get('userList/employee/find/:id')
    async findEmpByID(@Param('id') id: number) {
        return this.employeeService.findEmpByID(id);
    }

    /*
    @Get('userList/employee/findByEmp:id')
    findByAdminId(@Param('id', ParseIntPipe) id: number): any {
        return this.adminService.findByAdminId(id);
    }

    @Get('userList/employee/findByAdmin:id')
    findByEmployeeId(@Param('id', ParseIntPipe) id: number): any {
        return this.employeeService.findByEmployeeId(id);
    }
    */

    @Put('userList/employee/update/:id')
    @UsePipes(new ValidationPipe())
    updateEmpByID(@Body() empdto: CreateEmployee, @Param('id', ParseIntPipe) id: number): any {
        return this.employeeService.updateEmployeeByID(empdto, id);
    }

    @Delete('userList/employee/delete/:id')
    @UsePipes(new ValidationPipe())
    deleteEmpById(@Param('id', ParseIntPipe) id: number): any {
        return this.employeeService.deleteEmpByID(id);
    }
    
}
