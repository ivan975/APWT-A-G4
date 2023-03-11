import { Game } from 'src/publisher/game.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  filename: string;

  @Column()
  email: string;

  @OneToMany(() => Game, (game) => game.game)
  games: Game[];
}
