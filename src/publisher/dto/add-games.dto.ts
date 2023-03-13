import { IsNotEmpty } from 'class-validator';

export class AddGamesDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  yearOfRelease: string;

  @IsNotEmpty()
  price: number;

  isVisible: boolean;
  isAvailable: boolean;
}
