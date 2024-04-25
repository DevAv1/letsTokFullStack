import { Body, Controller, Post } from '@nestjs/common';
import { UsersProductsService } from './users-products.service';
import { CreateUserProductsDto } from './dto/create-userProducts.dto';

@Controller('users-products')
export class UsersProductsController {
  constructor(private readonly userProductsService: UsersProductsService) {}

  @Post()
  createNewUserProduct(@Body() createOrderProduct: CreateUserProductsDto) {
    return this.userProductsService.createUserProduct(createOrderProduct);
  }
}
