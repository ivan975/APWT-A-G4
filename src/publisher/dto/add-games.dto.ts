import { IsBoolean, IsNotEmpty } from 'class-validator';

export class AddGamesDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  yearOfRelease: string;

  @IsNotEmpty()
  price: number;

  @IsBoolean()
  @IsNotEmpty()
  isVisible: boolean;

  @IsBoolean()
  @IsNotEmpty()
  isAvailable: boolean;
}
