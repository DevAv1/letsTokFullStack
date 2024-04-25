import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProduct } from './entities/usersProducts.entity';
import { Repository } from 'typeorm';
import { CreateUserProductsDto } from './dto/create-userProducts.dto';

@Injectable()
export class UsersProductsService {
  constructor(
    @InjectRepository(UserProduct)
    private readonly usersProductsRepository: Repository<UserProduct>,
  ) {}

  async createUserProduct(createUserProduct: CreateUserProductsDto) {
    const userProduct = this.usersProductsRepository.create({
      ...createUserProduct,
      orderId: createUserProduct.orderId,
      createdAt: new Date(),
    });
    return await this.usersProductsRepository.save(userProduct);
  }
}
