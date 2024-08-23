import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { JobTitle } from "./jobTitle.entity";

@Injectable()
export class JobTitleService {
    constructor(
        @InjectRepository(JobTitle)
        private readonly jobTitleRepository: Repository<JobTitle>, 
    ){}

    async findAll(): Promise<JobTitle[]> {
        return await this.jobTitleRepository.find();
    }

    async findOne(id: number): Promise<JobTitle> {
        return await this.jobTitleRepository.findOne({ where: { id } });
    }

    async create(jobTitle: JobTitle): Promise<JobTitle> {
        return await this.jobTitleRepository.save(jobTitle);
    }

    async update(id: number, jobTitle: JobTitle): Promise<JobTitle> {
        const updateJobTitle = await this.jobTitleRepository.preload({ id, ...jobTitle });
        return await this.jobTitleRepository.save(updateJobTitle);
    }

    async remove(id: number): Promise<void> {
        const result = await this.jobTitleRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`JobTitle with ID ${id} not found`);
        }
    }

}