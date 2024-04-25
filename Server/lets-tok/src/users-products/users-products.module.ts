import { Module } from '@nestjs/common';
import { UsersProductsController } from './users-products.controller';
import { UsersProductsService } from './users-products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProduct } from './entities/usersProducts.entity';

@Module({
  controllers: [UsersProductsController],
  providers: [UsersProductsService],
  imports: [TypeOrmModule.forFeature([UserProduct])],
})
export class UsersProductsModule {}
