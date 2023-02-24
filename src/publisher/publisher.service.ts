import { Injectable, NotFoundException } from '@nestjs/common';
import { AddGamesDto } from './dto/add-games.dto';
import { Games, GamesStatus } from './model/games.model';

@Injectable()
export class PublisherService {
  private games: Games[] = [];

  getAllGames(): Games[] {
    return this.games;
  }
  getGameById(id: number): Games {
    const found = this.games.find((game) => game.id === id);

    if (!found) {
      throw new NotFoundException(`Game with ID:${id} not found`);
    }
    return found;
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
  deleteTask(id: number) {
    const found = this.getGameById(id);
    this.games = this.games.filter((game) => game.id !== found.id);
  }
}
