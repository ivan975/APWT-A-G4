import { Body, Controller, Get, Post } from '@nestjs/common';

const games = [];

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
}
