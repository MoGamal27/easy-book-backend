import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TimeFrame } from './entities/timeframe.entity';
import { CreateTimeFrameDto } from './dto/create-timeframe.dto';
import { UpdateTimeFrameDto } from './dto/update-timeframe.dto';

@Injectable()
export class TimeFrameService {
  constructor(
    @InjectRepository(TimeFrame)
    private timeFrameRepository: Repository<TimeFrame>,
  ) {}

  async create(createTimeFrameDto: CreateTimeFrameDto): Promise<TimeFrame> {
    const timeFrame = this.timeFrameRepository.create(createTimeFrameDto);
    return await this.timeFrameRepository.save(timeFrame);
  }

  async findAll(): Promise<TimeFrame[]> {
    return await this.timeFrameRepository.find({ relations: ['branch'] });
  }

  async findOne(id: number): Promise<TimeFrame> {
    const timeFrame = await this.timeFrameRepository.findOne({ where: { id }, relations: ['branch'] });
    if (!timeFrame) {
      throw new NotFoundException(`TimeFrame with ID ${id} not found`);
    }
    return timeFrame;
  }

  async update(id: number, updateTimeFrameDto: UpdateTimeFrameDto): Promise<TimeFrame> {
    const timeFrame = await this.findOne(id);
    Object.assign(timeFrame, updateTimeFrameDto);
    return await this.timeFrameRepository.save(timeFrame);
  }

  async remove(id: number): Promise<void> {
    const result = await this.timeFrameRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`TimeFrame with ID ${id} not found`);
    }
  }
}