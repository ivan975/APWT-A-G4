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

  isVisible: boolean;
  isAvailable: boolean;
  // code: string;
  // discount: number;
  // expirationDate: Date;
}
