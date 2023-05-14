import { Admin } from 'src/admin/admin.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Employee{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    department: string;

    @Column()
    salary: number;

    @ManyToOne(() => Admin, (admin) => admin.employees)
    admin: Admin

    @Column()
    adminId: number;
    
}
