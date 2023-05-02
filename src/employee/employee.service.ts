import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateEmployee } from "src/admin/adminForm.dto";
import { Employee } from "./employee.entity";

@Injectable()
export class EmployeeService {

    constructor(
        @InjectRepository(Employee)
        private employeeRepo: Repository<Employee>,
        ) {}

    insertEmployee(mydto: CreateEmployee): any {
        return this.employeeRepo.save(mydto);
    }

    findByEmployeeID(id): any {
        return this.employeeRepo.find({
            where: {id:id},
            relations: {
                admin: true
            },
        });
    }

    showAllEmp(): any {
        return this.employeeRepo.find()
    }

    async findEmpByID(id) {
        const employee = await this.employeeRepo.findOneById(id);
        console.log('Employee:', employee);
        return employee;
    }

    updateEmployeeByID(mydto: CreateEmployee, id): any {
        return this.employeeRepo.update(id, mydto)
    }

    deleteEmpByID(id): any {
        return this.employeeRepo.delete(id)
    }
}