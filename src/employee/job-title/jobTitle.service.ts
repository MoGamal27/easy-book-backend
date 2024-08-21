import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { jobTitle } from "./jobTitle.entity";

@Injectable()
export class JobTitleService {
    constructor(
        private readonly jobTitleRepository: Repository<jobTitle>, 
    ){}

    async findAll(): Promise<jobTitle[]> {
        return await this.jobTitleRepository.find();
    }

    async findOne(id: number): Promise<jobTitle> {
        return await this.jobTitleRepository.findOne({ where: { id } });
    }

    async create(jobTitle: jobTitle): Promise<jobTitle> {
        return await this.jobTitleRepository.save(jobTitle);
    }

    async update(id: number, jobTitle: jobTitle): Promise<jobTitle> {
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