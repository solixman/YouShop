import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  await app.listen(process.env.API_GATEWAY_PORT ?? 3000);
}
bootstrap();
