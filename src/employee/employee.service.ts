import { Injectable, NotFoundException } from '@nestjs/common';
import { Employee } from './employee.model';
import * as uuid from 'uuid';
import { createformdto } from './dto/create-employee.dto';

@Injectable()
export class EmployeeService {
  private Employee = [];

  getallusers() {
    return this.Employee;
  }

  getuserbyID(id: string): Employee {
    const found = this.Employee.find((Employee) => Employee.id);

    if (!found) {
      throw new NotFoundException('ID Not Found');
    }

    return found;
  }

  createform(createformdto: createformdto): Employee {
    const { name, email } = createformdto;

    const employee: Employee = {
      id: uuid,
      name,
      email,
      status,
    };

    this.Employee.push(employee);
    return employee;
  }

  deleteuser(id: string): void {
    const found = this.getuserbyID(id);
    this.Employee = this.Employee.filter(
      (Employee) => Employee.id !== found.id,
    );
  }

  updateuserstatus(id: string, status: string): Employee {
    const employee = this.getuserbyID(id);
    employee.status = status;
    return employee;
  }
}
