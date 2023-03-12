import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  yearOfRelease: string;

  @Column()
  price: number;

  @Column({ default: true })
  isAvailable: boolean;

  @Column({ default: true })
  isVisible: boolean;

  // @Column({ unique: true })
  // code: string;

  // @Column()
  // discount: number;

  // @Column()
  // expirationDate: Date;

  @ManyToOne(() => User, (user) => user.games)
  game: User;
}
