export interface Games {
  id: number;
  title: string;
  yearOfRelease: string;
  price: number;
  info: GamesInfo;
}

export enum GamesInfo {
  AVAILABLE = 'AVAILABLE',
  NOT_AVAILABLE = 'NOT_AVAILABLE',
}
