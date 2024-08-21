import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentService {
    constructor(
        @InjectRepository(Payment)
        private readonly paymentRepository: Repository<Payment>,
    ) {}

    async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
        const payment = this.paymentRepository.create(createPaymentDto);
        return await this.paymentRepository.save(payment);
    }

    async findAll(): Promise<Payment[]> {
        return await this.paymentRepository.find();
    }

    async findOne(id: number): Promise<Payment> {
        const payment = await this.paymentRepository.findOne({ where: { id } });
        if (!payment) {
            throw new NotFoundException(`Payment with ID ${id} not found`);
        }
        return payment;
    }

    async update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<Payment> {
        const payment = await this.paymentRepository.preload({
            id,
            ...updatePaymentDto,
        });
        if (!payment) {
            throw new NotFoundException(`Payment with ID ${id} not found`);
        }
        return await this.paymentRepository.save(payment);
    }

    async remove(id: number): Promise<Payment> {
        const payment = await this.paymentRepository.findOne({ where: { id } });
        if (!payment) {
            throw new NotFoundException(`Payment with ID ${id} not found`);
        }
        return await this.paymentRepository.remove(payment);
    }
}

