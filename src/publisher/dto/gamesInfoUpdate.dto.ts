import { IsNotEmpty } from 'class-validator';

export class gamesInfoUpdate {
  @IsNotEmpty()
  title: string;
}
