import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseEnumPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddGamesDto } from './dto/add-games.dto';
import { Games, GamesInfo } from './model/games.model';
import { PublisherService } from './publisher.service';

@Controller('/publisher')
export class PublisherController {
  constructor(private gamesService: PublisherService) {}

  @Get()
  getAllGames() {
    return this.gamesService.getAllGames();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createGames(@Body() addGamesDto: AddGamesDto): Games {
    return this.gamesService.createGames(addGamesDto);
  }

  @Get('/:id')
  getGameById(@Param('id') id: number): Games {
    return this.gamesService.getGameById(id);
  }

  @Put('/info/:id')
  updateTask(
    @Param('id') id: number,
    @Body('info', new ParseEnumPipe(GamesInfo)) info: GamesInfo,
  ) {
    return this.gamesService.updateGames(id, info);
  }

  @Delete('/:id')
  deleteGames(@Param('id') id: number) {
    return this.gamesService.deleteGames(id);
  }
}
