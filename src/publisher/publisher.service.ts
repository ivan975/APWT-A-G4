import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddGamesDto } from './dto/add-games.dto';
import { Game } from './game.entity';

@Injectable()
export class PublisherService {
  constructor(
    @InjectRepository(Game)
    private gameRepo: Repository<Game>,
  ) {}

  async getAllGames(): Promise<any> {
    const found = await this.gameRepo.find();
    if (!found) {
      throw new NotFoundException(`Game not found`);
    }
    return found;
  }

  async getGameById(id): Promise<any> {
    const found = await this.gameRepo.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`Game with ID:${id} not found`);
    }
    return found;
  }

  createGames(createGamesDto: AddGamesDto) {
    const games = new Game();
    games.title = createGamesDto.title;
    games.yearOfRelease = createGamesDto.yearOfRelease;
    games.price = createGamesDto.price;

    return this.gameRepo.save(games);
  }

  async updateGamesById(addGamesDto, id) {
    return await this.gameRepo.update(id, addGamesDto);
  }

  async deleteGames(id: number): Promise<void> {
    const result = await this.gameRepo.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with id ${id} does not exist`);
    }
  }
}
