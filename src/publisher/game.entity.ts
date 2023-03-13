import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn()
  gameId: number;

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

  // @ManyToOne(() => User, (user) => user.games)
  // game: User;

  @ManyToOne(() => User, (user) => user.games)
  @JoinColumn({ name: 'FK_GameID' })
  user: User;
}
