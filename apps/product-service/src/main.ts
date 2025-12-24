import { NestFactory } from '@nestjs/core';
import { ProductServiceModule } from './product-service.module';
import dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(ProductServiceModule);
  await app.listen(process.env.PRODUCT_SERVICE_PORT ?? 3003);
}
bootstrap();
