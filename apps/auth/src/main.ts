import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const configService = app.get<ConfigService>(ConfigService);

  await app.listen(configService.get('APP_AUTH_PORT'));
}
bootstrap();
