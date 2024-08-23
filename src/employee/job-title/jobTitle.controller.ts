import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobTitleService } from './jobTitle.service';
import { JobTitle } from './jobTitle.entity';

@Controller('job-title')
export class JobTitleController {
    constructor(private readonly jobTitleService: JobTitleService) {}

    @Get()
    findAll(): Promise<JobTitle[]> {
        return this.jobTitleService.findAll();
    }

    @Post()
    create(@Body() jobTitle: JobTitle): Promise<JobTitle> {
        return this.jobTitleService.create(jobTitle);
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<JobTitle> {
        return this.jobTitleService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() jobTitle: JobTitle): Promise<JobTitle> {
        return this.jobTitleService.update(id, jobTitle);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.jobTitleService.remove(id);
    }
}


