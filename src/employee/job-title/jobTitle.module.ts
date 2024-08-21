// jobTitle module

import { Module } from '@nestjs/common';
import { JobTitleController } from './jobTitle.controller';
import { JobTitleService } from './jobTitle.service';
import { jobTitle } from './jobTitle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([jobTitle])],
    controllers: [JobTitleController],
    providers: [JobTitleService],
})
export class JobTitleModule {}