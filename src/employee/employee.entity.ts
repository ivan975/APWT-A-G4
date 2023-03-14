import { Admin } from 'src/admin/admin.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity("employee")
export class Employee{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    salary: number;

    @ManyToOne(() => Admin, (admin) => admin.employee)
    admin: Admin

}
