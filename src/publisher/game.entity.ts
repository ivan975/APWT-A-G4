import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { GamesInfo } from './model/games.model';

export class Game extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  yearOfRelease: string;

  @Column()
  price: string;

  @Column()
  info: GamesInfo;
}
