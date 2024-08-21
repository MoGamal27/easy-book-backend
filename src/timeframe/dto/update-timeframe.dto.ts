import { PartialType } from '@nestjs/mapped-types';
import { CreateTimeFrameDto } from './create-timeframe.dto';

export class UpdateTimeFrameDto extends PartialType(CreateTimeFrameDto) {}