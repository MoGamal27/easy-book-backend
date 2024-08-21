// order service
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Order } from './entities/order.entity';
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";



@Injectable()
export class OrderService {

    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
    ) {}

    async create(createOrderDto: CreateOrderDto) {
        const order = this.orderRepository.create(createOrderDto);
        await this.orderRepository.save(order);
        return order;
    }

    async findAll() {
        return await this.orderRepository.find();

    }

    async findOne(id: number) {
        return await this.orderRepository.findOne({ where: { id } });
    }

    async update(id: number, updateOrderDto: UpdateOrderDto) {
        const order = await this.orderRepository.findOne({ where: { id } });
        if(!order) {
            throw new Error('Order not found');
        }

        await this.orderRepository.update(id, updateOrderDto);
        return await this.orderRepository.findOne({ where: {id} });
    }
  
    async remove(id: number) {
        const order = await this.orderRepository.findOne({ where: { id } });
        if (!order) {
            throw new Error('Client not found');
        }
        return await this.orderRepository.remove(order);
    }

        
    }
    
