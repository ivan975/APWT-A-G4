import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { Store } from 'express-session';
import { MemoryStore } from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
      },
      store: new MemoryStore() as Store
    }),
  );
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
