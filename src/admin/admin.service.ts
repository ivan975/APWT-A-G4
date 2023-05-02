import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import { CreateAdmin } from './adminForm.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {

    constructor(
        @InjectRepository(Admin)
        private adminRepo: Repository<Admin>
    ) {}

    showIndex(): any {
        return this.adminRepo.find()
    }

    insertUserAdmin(mydto: CreateAdmin): any {
        const adminAccount = new Admin()
        
        adminAccount.name = mydto.name;
        adminAccount.email = mydto.email;
        adminAccount.password = mydto.password;

        return this.adminRepo.save(adminAccount);
    }

    findByAdminId(id):any {
        return this.adminRepo.find({ 
            where: {id:id},
            relations: {
                employees: true,
            },
        });
    }

    async signin(mydto){
    
        if (mydto.name != null && mydto.password != null) {
            const mydata = await this.adminRepo.findOneBy({ name: mydto.name });
            const isMatch = await bcrypt.compare(mydto.password, mydata.password);
            if (isMatch) {
                return true;
            }
            else {
                return false;
            }
        } else {
            return false;
        }
    
    }
}
