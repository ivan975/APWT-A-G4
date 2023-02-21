export interface Games {
  id: number;
  title: string;
  yearOfRelease: string;
  price: number;
  status: GamesStatus;
}

export enum GamesStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
