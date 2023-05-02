import { Employee } from 'src/employee/employee.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Admin{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Employee, (employees) => employees.admin)
    employees: Employee[]
    
}