import { UserEntity } from 'src/user/user.entity'
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany} from 'typeorm';

@Entity("employee")
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  status: string;

  @ManyToMany(() => UserEntity, (user) => user.employee)
  user: UserEntity[]
}
