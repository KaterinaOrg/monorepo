import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Add a comment
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true
  });
  await app.listen(3000);
}
bootstrap();
