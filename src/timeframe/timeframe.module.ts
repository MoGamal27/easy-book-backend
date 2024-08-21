// time frame module
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeFrameController } from './timeframe.controller';
import { TimeFrameService } from './timeframe.service';
import { TimeFrame } from './entities/timeframe.entity';

@Module({
    imports: [TypeOrmModule.forFeature([TimeFrame])],
    controllers: [TimeFrameController],
    providers: [TimeFrameService],
})
export class TimeFrameModule {}

