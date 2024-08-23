// jobTitle module

import { Module } from '@nestjs/common';
import { JobTitleController } from './jobTitle.controller';
import { JobTitleService } from './jobTitle.service';
import { JobTitle } from './jobTitle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([JobTitle])],
    controllers: [JobTitleController],
    providers: [JobTitleService],
    exports: [JobTitleService]
})
export class JobTitleModule {}