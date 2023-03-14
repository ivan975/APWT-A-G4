import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";

@Injectable()
export class EmployeeService {

    constructor(
        @InjectRepository(UserEntity)
        private employeeRepo: Repository<UserEntity>
        ) {}
}