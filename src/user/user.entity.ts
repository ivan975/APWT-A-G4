import { EmployeeEntity } from 'src/employee/employee.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany} from 'typeorm';

@Entity("user")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  total_download: number;

  @ManyToMany(() => EmployeeEntity, (employee) => employee.user)
  employee: EmployeeEntity[]
}
