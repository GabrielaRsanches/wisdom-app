import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:8080',
    methods: 'GET,POST,PUT,DELETE',
  });

  const port = 3000;
  await app.listen(port);
  console.log(`Backend is running on: http://localhost:${port}`);
}

bootstrap();
