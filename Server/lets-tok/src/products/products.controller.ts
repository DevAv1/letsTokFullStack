import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/CreateProduct.dto.';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Post()
  createProduct(@Body() createProduct: CreateProductDto) {
    return this.productService.createProduct(createProduct);
  }

  @Put()
  updateProduct(@Body() updatedProduct: CreateProductDto) {
    return this.productService.editProduct(updatedProduct);
  }

  @Delete(':id')
  deleteProduct(@Param() id: string) {
    return this.productService.deleteProduct(id);
  }
}
