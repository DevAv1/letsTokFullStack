import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Order } from './entities/orders.entity';
import { CreateOrderDto } from './dto/createOrder.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderServiceRepository: Repository<Order>,
  ) {}

  async createNewOrder(newOrderDto: CreateOrderDto) {
    const order = this.orderServiceRepository.create({
      ...newOrderDto,
      createdAt: new Date(),
      status: 'active',
    });
    return await this.orderServiceRepository.save(order);
  }

  async updateExistingOrder(id: string) {
    const orderToUpdate = await this.orderServiceRepository.findOne({
      where: {
        id: +id,
      },
    });
    const response = await this.orderServiceRepository.update(
      orderToUpdate.id,
      {
        ...orderToUpdate,
        status: 'inOrder',
      },
    );
    if (response.affected === 0) {
      throw new Error();
    } else {
      return this.orderServiceRepository.findOne({
        where: { id: orderToUpdate.id },
      });
    }
  }
}
