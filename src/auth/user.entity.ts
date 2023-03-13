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
  userId: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  filename: string;

  @Column()
  email: string;

  // @OneToMany(() => Product, (product) => product.seller)
  // products: Product[];

  @OneToMany(() => Game, (game) => game.user)
  games: Game[];
}
