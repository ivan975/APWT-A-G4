import {
  Body,
  Controller,
  Get,
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

  // @Get('/viewAll')
  // getGames() {
  //   return games;
  // }

  // @Get('/visible')
  // isVisible() {
  //   return `Visible`;
  // }

  // @Get('/track')
  // trackingOrder() {
  //   console.log('track');
  //   return `Order tracking`;
  // }

  // @Get('/view')
  // viewingOrder() {
  //   console.log('viewing');
  //   return `Order Viewing`;
  // }

  // @Get('/available')
  // checkingAvailable() {
  //   console.log(`available`);
  //   return `Available`;
  // }

  // @Get(':id')
  // getGamesById(@Param('id') id: number) {
  //   console.log(`id`);
  //   return games.find((games) => +games.id === +id);
  // }

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

  // @Delete(':id')
  // deleteGames(@Param('id') id: number) {
  //   games = games.filter((games) => +games.id !== +id);
  //   return games;
  // }
}
