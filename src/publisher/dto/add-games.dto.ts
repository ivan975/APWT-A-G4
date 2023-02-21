import { IsNotEmpty } from 'class-validator';

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
