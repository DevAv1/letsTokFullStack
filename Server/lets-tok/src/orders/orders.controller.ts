import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/createOrder.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.createNewOrder(createOrderDto);
  }

  @Put(':id')
  updateOrder(@Param('id') id: string) {
    return this.ordersService.updateExistingOrder(id);
  }
}
