import { NestFactory } from '@nestjs/core';
import { OrderServiceModule } from './order-service.module';
import dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(OrderServiceModule);
  await app.listen(process.env.ORDER_SERVICE_PORT ?? 3002);
}
bootstrap();
