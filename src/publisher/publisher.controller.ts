import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddGamesDto } from './dto/add-games.dto';
import { Games } from './model/games.model';
import { PublisherGuard } from './publisher.guard';
import { PublisherService } from './publisher.service';
@Controller('/publisher')
export class PublisherController {
  constructor(private gamesService: PublisherService) {}

  @Get()
  @UseGuards(new PublisherGuard())
  getAllGames() {
    return this.gamesService.getAllGames();
  }
  @Post('/create-games/:id')
  @UsePipes(ValidationPipe)
  createGames(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) createGamesDto: AddGamesDto,
  ) {
    return this.gamesService.createGames(id, createGamesDto);
  }

  @Get('/:id')
  getGameById(@Param('id', ParseIntPipe) id: number): Promise<Games> {
    return this.gamesService.getGameById(id);
  }

  @Get('/view-game/:id')
  async viewGame(@Param('id', ParseIntPipe) id: number) {
    return this.gamesService.viewGame(id);
  }

  @Get('/view-games/:id')
  async viewGames(@Param('id', ParseIntPipe) id: number) {
    return this.gamesService.viewGames(id);
  }

  @Put('updateGamesById/:id')
  @UsePipes(new ValidationPipe())
  updateGamesById(
    @Body() games: AddGamesDto,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.gamesService.updateGamesById(games, id);
  }

  @Put(':id/visibility')
  @UsePipes(new ValidationPipe())
  async updateGamesVisibility(
    @Param('id') id: number,
    @Body() games: AddGamesDto,
  ) {
    return await this.gamesService.updateGameVisibility(id, games);
  }

  @Delete('/:id')
  @UsePipes(new ValidationPipe())
  deleteGames(@Param('id', ParseIntPipe) id: number) {
    return this.gamesService.deleteGames(id);
  }
  @Post('/email')
  async sendMail(@Body() mydata) {
    await this.gamesService.sendEmail(mydata);
  }
}
