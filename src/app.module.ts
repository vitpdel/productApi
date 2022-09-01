import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './productController';
import { ProductsService } from './productServices';

@Module({
  imports: [],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
