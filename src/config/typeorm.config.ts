import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',

  host: 'localhost',

  port: 5432,

  username: 'postgres',

  password: 'sabrina',

  database: 'publisher',

  autoLoadEntities: true,

  synchronize: true,
};
