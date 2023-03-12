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

  @Post()
  @UsePipes(ValidationPipe)
  createGames(@Body() addGamesDto: AddGamesDto): Promise<Games> {
    return this.gamesService.createGames(addGamesDto);
  }

  @Get('/:id')
  getGameById(@Param('id', ParseIntPipe) id: number): Promise<Games> {
    return this.gamesService.getGameById(id);
  }

  @Get(':/id')
  getGamesByUserID(@Param('id', ParseIntPipe) id: number): Promise<Games> {
    return this.gamesService.getGamesByUserID(id);
  }

  @Put('updateGamesById/:id')
  @UsePipes(new ValidationPipe())
  updateGamesById(
    @Body() games: AddGamesDto,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.gamesService.updateGamesById(games, id);
  }

  // @Put(':id/visibility')
  // async updateVisibility(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() visibility: boolean,
  // ): Promise<any> {
  //   return this.gamesService.updateVisibility(id, visibility);
  // }

  @Delete('/:id')
  deleteGames(@Param('id', ParseIntPipe) id: number) {
    return this.gamesService.deleteGames(id);
  }
  @Post('/email')
  async sendMail(@Body() mydata) {
    await this.gamesService.sendEmail(mydata);
  }
}
