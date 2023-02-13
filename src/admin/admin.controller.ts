import { Controller, Get } from '@nestjs/common';

@Controller('admin')
export class AdminController {

    @Get()
    SendMsg(): string {
        return 'Welcome ADMIN!'
    }

    @Get('/users')
    DemoMsg(): string {
        return 'USERS'
    }
    
    @Get('/users/employee')
    dm1(): string {
        return 'List of Employees'
    }

    @Get('/users/publisher')
    dm2(): string {
        return 'List of Publishers'
    }

    @Get('/users/user')
    dm3(): string {
        return 'List of Active Users'
    }
}
