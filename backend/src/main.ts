import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator';
import { AppDataSource } from './infra/dataSource';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:8081',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type , Authorization',
  });

  const port = 3000;
  await app.listen(port);
  console.log(`Backend is running on: http://localhost:${port}`);

  useContainer(app.select(AppModule), {
    fallbackOnErrors: true,
  });
}

bootstrap();
