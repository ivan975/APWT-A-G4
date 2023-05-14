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

    getProfile(): any {
        return this.adminRepo.find()
    }

    async insertUserAdmin(mydto: CreateAdmin) {
        const salt = await bcrypt.genSalt()
        const hassedpassed = await bcrypt.hash(mydto.password, salt);
        mydto.password= hassedpassed;
        return this.adminRepo.save(mydto);
    }

    updateUserAdmin(email, name): any {
        return this.adminRepo.update({email:email}, {name:name});
    }

    findByAdminId(id): any {
        return this.adminRepo.find({ 
            where: {id:id},
            relations: {
                employees: true,
            },
        });
    }

    deleteUserByAdminId(id): any {
        return this.adminRepo.delete(id);
    }

    async signin(mydto: CreateAdmin){
    
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
