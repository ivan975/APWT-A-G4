import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import { CreateAdmin, CreateEmployee } from './adminForm.dto';

@Injectable()
export class AdminService {

    constructor(
        @InjectRepository(Admin)
        private adminRepo: Repository<Admin>
        //mailer
    ) {}

    showIndex(): any {
        return this.adminRepo.find()
    }

    insertUserAdmin(mydto: CreateAdmin): any {
        const adminaccount = new Admin()
        adminaccount.name = mydto.name;
        adminaccount.email = mydto.email;
        adminaccount.password = mydto.password;

        return this.adminRepo.save(adminaccount);
    }
}
