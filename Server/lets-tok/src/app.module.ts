import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';
import { ProductsModule } from './products/products.module';
import { UsersProductsModule } from './users-products/users-products.module';
import { OrdersModule } from './orders/orders.module';
import { AdminUsersModule } from './admin-users/admin-users.module';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    UsersProductsModule,
    OrdersModule,
    AdminUsersModule,
    TypeOrmModule.forRoot(TypeOrmConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
