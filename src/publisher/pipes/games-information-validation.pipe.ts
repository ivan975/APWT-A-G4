import { BadRequestException, PipeTransform } from '@nestjs/common';
import { GamesInfo } from '../model/games.model';

export class gameInfoValidationPipe implements PipeTransform {
  readonly allowedInfo = [GamesInfo.AVAILABLE, GamesInfo.NOT_AVAILABLE];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isInfoValid(value)) {
      throw new BadRequestException(`${value} is an invalid information`);
    }
  }

  private isInfoValid(info: any) {
    const index = this.allowedInfo.indexOf(info);
    return index !== -1;
  }
}
