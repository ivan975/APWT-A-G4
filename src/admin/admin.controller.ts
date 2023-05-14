import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, ValidationPipe, ParseIntPipe, Session, UseGuards, UnauthorizedException, Res, Req } from '@nestjs/common';
import { AdminService } from './admin.service';
import { EmployeeService } from 'src/employee/employee.service';
import { CreateAdmin } from './adminForm.dto';
import { CreateEmployee } from './adminForm.dto'
import { SessionGuard } from './session.guard';
import { Response } from 'express';


@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService, private employeeService: EmployeeService) {}

    @Post('/signin')
    @UsePipes(new ValidationPipe())
    async signin(@Session() session, @Body() mydto: CreateAdmin) {
        const res = await (this.adminService.signin(mydto));
        if(res == true) {
            session.name = mydto.name;
            return (session.name);
        } else {
            throw new UnauthorizedException({ message: "Invalid Credentials" });
        }
    }
    
    @Get()
    getIndexAdmin(): any {
        return this.adminService.showIndex();
    }
    
    @Get('profile')
    @UsePipes(new ValidationPipe())
    getAdminProfile(@Session() session, @Param('name') mydto: CreateAdmin): any {
        if (session.name == mydto.name) {
            return (session.name);
        } else {
            return "TT-TT"
        }
    }

    @Post('createAdmin')
    @UsePipes(new ValidationPipe())
    createAdmin(@Body() mydto: CreateAdmin): any {
        return this.adminService.insertUserAdmin(mydto);
    }

    @Put('updateAdmin')
    @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    updateUserAdmin(@Session() session, @Body('email') email: string): any {
        console.log(session.name);
        return this.adminService.updateUserAdmin(email, session.name);
    }

    /*
    @Delete('/deleteAdmin/:id')
    deleteAdminById(@Param('id', ParseIntPipe) id: number): any {
        return this.adminService.deleteUserByAdminId(id);
    }
    */

    @Get('userList')
    findAll(): string {
        return 'User Category: \n1. Employee \n2. Publisher \n3. Customer'
    }
    
    @Get('/signout')
    signout(@Session() session, @Res() res: Response) {
        if(session.destroy()) {
            res.redirect('/admin');
        } else {
            throw new UnauthorizedException("Invalid action");
        }
    }

    /* Employee Routes */
    
    @Post('userList/employee/insert')
    @UsePipes(new ValidationPipe())
    async insertEmployee(@Body() empdto: CreateEmployee, @Req() request) {
        //const adminId = request.session.id;
        //const newEmployee = await this.employeeService.insertEmployee(empdto)
        //return newEmployee;

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
