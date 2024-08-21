import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimeFrameService } from './timeframe.service';
import { CreateTimeFrameDto } from './dto/create-timeframe.dto';
import { UpdateTimeFrameDto } from './dto/update-timeframe.dto';

@Controller('timeframes')
export class TimeFrameController {
  constructor(private readonly timeFrameService: TimeFrameService) {}

  @Post()
  create(@Body() createTimeFrameDto: CreateTimeFrameDto) {
    return this.timeFrameService.create(createTimeFrameDto);
  }

  @Get()
  findAll() {
    return this.timeFrameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timeFrameService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTimeFrameDto: UpdateTimeFrameDto) {
    return this.timeFrameService.update(+id, updateTimeFrameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timeFrameService.remove(+id);
  }
}