import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobTitleService } from './jobTitle.service';
import { jobTitle } from './jobTitle.entity';

@Controller('job-title')
export class JobTitleController {
    constructor(private readonly jobTitleService: JobTitleService) {}

    @Get()
    findAll(): Promise<jobTitle[]> {
        return this.jobTitleService.findAll();
    }

    @Post()
    create(@Body() jobTitle: jobTitle): Promise<jobTitle> {
        return this.jobTitleService.create(jobTitle);
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<jobTitle> {
        return this.jobTitleService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() jobTitle: jobTitle): Promise<jobTitle> {
        return this.jobTitleService.update(id, jobTitle);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.jobTitleService.remove(id);
    }
}


