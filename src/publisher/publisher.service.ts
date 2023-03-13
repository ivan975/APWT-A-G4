import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddGamesDto } from './dto/add-games.dto';
import { Game } from './game.entity';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class PublisherService {
  constructor(
    @InjectRepository(Game)
    private gameRepo: Repository<Game>,
    private mailerService: MailerService,
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
  getGamesByUserID(id): any {
    return this.gameRepo.find({
      where: { id: id },
      relations: {
        game: true,
      },
    });
  }

  createGames(createGamesDto: AddGamesDto) {
    const games = new Game();
    games.id = createGamesDto.id;
    games.title = createGamesDto.title;
    games.yearOfRelease = createGamesDto.yearOfRelease;
    games.price = createGamesDto.price;

    return this.gameRepo.save(games);
  }

  insertGames(insertGames: AddGamesDto): any {
    return this.gameRepo.save(insertGames);
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
  async updateGameVisibility(id: number, addGamesDto: AddGamesDto) {
    const allGames = await this.gameRepo.findOneByOrFail({ id });
    allGames.isAvailable = addGamesDto.isAvailable;
    allGames.isVisible = addGamesDto.isVisible;
    return await this.gameRepo.save(allGames);
  }
  async sendEmail(data) {
    return await this.mailerService.sendMail({
      to: data.email,
      subject: data.subject,
      text: data.message,
    });
  }
}
