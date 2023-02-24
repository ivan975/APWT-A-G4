import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddGamesDto } from './dto/add-games.dto';
import { Games } from './model/games.model';
import { PublisherService } from './publisher.service';

@Controller('/publisher')
export class PublisherController {
  constructor(private gamesService: PublisherService) {}

  @Get()
  getAllTasks() {
    return this.gamesService.getAllGames();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() addGamesDto: AddGamesDto): Games {
    return this.gamesService.createTask(addGamesDto);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: number) {
    return this.gamesService.getGameById(id);
  }

  // @Put(':id')
  // updateGamesInfo(
  //   @Param('id') id: number,
  //   @Body() updateGamesDTO: GameUploadDto,
  // ) {
  //   const game = games.findIndex((games) => +games.id === +id);
  //   if (!game) {
  //     return;
  //   }
  //   games[game] = updateGamesDTO;
  // }
  @Delete('/:id')
  deleteTasks(@Param('id') id: number) {
    this.gamesService.deleteTask(id);
  }
}
