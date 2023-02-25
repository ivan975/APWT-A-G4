import { Injectable, NotFoundException } from '@nestjs/common';
import { AddGamesDto } from './dto/add-games.dto';
import { Games, GamesInfo } from './model/games.model';

@Injectable()
export class PublisherService {
  private games: Games[] = [];

  getAllGames(): Games[] {
    return this.games;
  }

  getGameById(id: number): Games {
    const found = this.games.find((game) => +game.id === +id);

    if (!found) {
      throw new NotFoundException(`Game with ID:${id} not found`);
    }
    return found;
  }

  createGames(createTaskDto: AddGamesDto): Games {
    const { id, title, yearOfRelease, price } = createTaskDto;

    const game: Games = {
      id,
      title,
      yearOfRelease,
      price,
      info: GamesInfo.AVAILABLE,
    };

    this.games.push(game);
    return game;
  }
  updateGamesStatus(id: number, info: GamesInfo): Games {
    const games = this.getGameById(id);
    games.info = info;
    return games;
  }

  deleteGames(id: number) {
    const found = this.getGameById(id);
    this.games = this.games.filter((game) => +game.id !== +found.id);
    return `Games with id no: ${found.id} deleted successfully`;
  }
}
