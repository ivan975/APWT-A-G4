import { Injectable } from '@nestjs/common';
import { AddGamesDto } from './dto/add-games.dto';
import { Games, GamesStatus } from './model/games.model';

@Injectable()
export class PublisherService {
  private games: Games[] = [];

  getAllGames(): Games[] {
    return this.games;
  }

  createTask(createTaskDto: AddGamesDto): Games {
    const { id, title, yearOfRelease, price } = createTaskDto;

    const game: Games = {
      id,
      title,
      yearOfRelease,
      price,
      status: GamesStatus.OPEN,
    };

    this.games.push(game);
    return game;
  }
}
