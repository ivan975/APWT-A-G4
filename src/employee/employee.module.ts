import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employee } from "./employee.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Employee])]
})
export class EmployeeModule {}