import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['log', 'debug', 'warn', 'error'],
  });
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap().catch((error) => {
  console.error('Error during app bootstrap:', error);
  process.exit(1);
});
