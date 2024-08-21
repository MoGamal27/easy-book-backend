//client service

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';


@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(Client)
        private clientRepository: Repository<Client>,
    ) {}

    async create(createClientDto: CreateClientDto) {
        const client = this.clientRepository.create(createClientDto);
        await this.clientRepository.save(client);
        return client;
    }

    async findAll() {
        return await this.clientRepository.find();
    }

    async findOne(id: number) {
        return await this.clientRepository.findOne({ where: { id } });
    }

    async update(id: number, updateClientDto: UpdateClientDto) {
        const client = await this.clientRepository.findOne({ where: { id } });
        if (!client) {
            throw new Error('Client not found');
        }
        await this.clientRepository.update(id, updateClientDto);
        return await this.clientRepository.findOne({ where: { id } });
    }

    async remove(id: number) {
        const client = await this.clientRepository.findOne({ where: { id } });
        if (!client) {
            throw new Error('Client not found');
        }
        return await this.clientRepository.remove(client);
    }
    
}
