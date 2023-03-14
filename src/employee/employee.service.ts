import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateEmployee } from "src/admin/adminForm.dto";
import { Employee } from "./employee.entity";

@Injectable()
export class EmployeeService {

    constructor(
        @InjectRepository(Employee)
        private employeeRepo: Repository<Employee>
        ) {}

    insertEmployee(mydto: CreateEmployee): any {
        return this.employeeRepo.save(mydto);
    }

    showAllEmp(): any {
        return this.employeeRepo.find()
    }

    showEmpByIDName(qry): any {
        return this.employeeRepo.findOneBy({ id:qry.id, name:qry.name })
    }

    updateEmployeeByID(mydto: CreateEmployee, id): any {
        return this.employeeRepo.update(id, mydto)
    }
}