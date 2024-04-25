import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/CreateProduct.dto.';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async getAllProducts() {
    return await this.productsRepository.find();
  }

  async createProduct(createProductDto: CreateProductDto) {
    const product = this.productsRepository.create(createProductDto);
    return await this.productsRepository.save(product);
  }

  async editProduct(product: CreateProductDto) {
    const response = await this.productsRepository.update(product.id, product);
    if (response.affected === 0) {
      throw Error();
    } else {
      return this.productsRepository.findOne({
        where: { id: product.id },
      });
    }
  }

  async deleteProduct(productId: string) {
    return await this.productsRepository.delete(productId);
  }
}
