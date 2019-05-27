import { enableProdMode } from '@angular/core';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

enableProdMode();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  // const port = process.env.port || 3333;
  const port = process.env.port || 4000;
  await app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/${globalPrefix}`);
  });
}

bootstrap();
