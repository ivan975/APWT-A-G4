import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createformdto } from './dto/create-employee.dto';
import { EmployeeEntity } from './employee.entity';
import { Repository } from 'typeorm';
import { GetEmployeeFilterDto } from './dto/get-employee-filter.dto';

@Injectable()
export class EmployeeService {
  async getuser(filterDto: GetEmployeeFilterDto): Promise<any> {
    const found = await this.employeeRepo.find();
    if (!found) {
      throw new NotFoundException(`User not found`);
    }
    return found;
  }

  createform(createformdto: createformdto): any {
    const empAcc = new EmployeeEntity();
    empAcc.name = createformdto.name;
    empAcc.email = createformdto.email;
    empAcc.status = createformdto.status;

    return this.employeeRepo.save(empAcc);
  }

  constructor(
    @InjectRepository(EmployeeEntity)
    private employeeRepo: Repository<EmployeeEntity>,
  ) {}

  async getAlluser(): Promise<any> {
    const found = await this.employeeRepo.find();
    if (!found) {
      throw new NotFoundException(`User Not Found`);
    }
    return found;
  }

  async getuserbyID(id: number): Promise<any> {
    const found = await this.employeeRepo.findOneBy({ id });

    if (!found) {
      throw new NotFoundException('ID Not Found');
    }

    return found;
  }

  async getuserById(id: any): Promise<any> {
    const found = await this.employeeRepo.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`user with ID:${id} not found`);
    }
    return found;
  }

  getuserbyid(id: any): any {
    return this.employeeRepo.find({
      where: { id: id },
      relations: {},
    });
  }

  createemployee(createEmployeeDto: createformdto) {
    const employee = new EmployeeEntity();
    employee.status = createEmployeeDto.status;
    employee.name = createEmployeeDto.name;
    employee.email = createEmployeeDto.email;

    return this.employeeRepo.save(employee);
  }

  async deleteuser(id: number): Promise<void> {
    const result = await this.employeeRepo.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with id ${id} does not exist`);
    }
  }

  async updateuserstatus(id: number, status: string): Promise<any> {
    const employee = await this.getuserbyID(id);
    employee.status = status;
    await employee.save();
    return employee;
  }

}
