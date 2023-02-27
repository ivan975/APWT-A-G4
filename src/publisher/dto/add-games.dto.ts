import { IsNotEmpty } from 'class-validator';
// import { GamesInfo } from '../model/games.model';

export class AddGamesDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  yearOfRelease: string;

  @IsNotEmpty()
  price: number;
}
