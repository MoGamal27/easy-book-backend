// order controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrderController {
    constructor(private readonly OrderService: OrderService) {}

    @Post()
    create(@Body() createOrderDto: CreateOrderDto) {
        return this.OrderService.create(createOrderDto)
    }

    @Get()
    findAll() {
        return this.OrderService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.OrderService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateorderDto: UpdateOrderDto) {
        return this.OrderService.update(+id, updateorderDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.OrderService.remove(+id)
    }
}