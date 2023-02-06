import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

let games = [];
class GameUploadDto {
  id: number;
  name: string;
  publishDate: string;
  price: number;
}

@Controller('/publisher')
export class PublisherController {
  @Post()
  uploadGame(@Body() gameUploadDto: GameUploadDto) {
    games.push(gameUploadDto);
    console.log(`user`);
    return `game uploaded successfully`;
  }

  @Get()
  getGames() {
    return games;
  }

  @Get('/track')
  trackingOrder() {
    console.log('track');
    return `Order tracking`;
  }

  @Get('/available')
  checkingAvailable() {
    console.log(`available`);
    return `Available`;
  }

  @Get(':id')
  getGamesById(@Param('id') id: number) {
    console.log(`id`);
    return games.find((games) => +games.id === +id);
  }

  @Put(':id')
  updateGamesInfo(
    @Param('id') id: number,
    @Body() updateGamesDTO: GameUploadDto,
  ) {
    const game = games.findIndex((games) => +games.id === +id);
    if (!game) {
      return;
    }
    games[game] = updateGamesDTO;
  }

  @Delete(':id')
  deleteGames(@Param('id') id: number) {
    games = games.filter((games) => +games.id !== +id);
  }
}
