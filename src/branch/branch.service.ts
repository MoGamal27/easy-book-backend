/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Branch } from './entities/branch.entity';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { SearchService } from 'src/elasticsearch/elasticsearch.service';

@Injectable()
export class BranchService {
  constructor(
    @InjectRepository(Branch)
    private branchRepository: Repository<Branch>,
    private cloudinaryService: CloudinaryService,
    private searchService: SearchService
  ) {}

  async create(createBranchDto: CreateBranchDto, file: Express.Multer.File): Promise<Branch> {
    try {
      const uploadResult = await this.cloudinaryService.uploadImage(file);

      const branch = this.branchRepository.create({
        ...createBranchDto,
       imageUrl: uploadResult.secure_url,      
    });
      
      await this.searchService.indexBranch(branch);
      return await this.branchRepository.save(branch);

    }catch(error){
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    } 
  }

  async findAll(): Promise<Branch[]> {
    return await this.branchRepository.find();
  }

  // find branch by name
  async findByName(name: string): Promise<Branch> {
    return await this.branchRepository.findOne({ where: { name } });
  }

  async findOne(id: number): Promise<Branch> {
    const branch = await this.branchRepository.findOne({ where: { id } });
    if (!branch) {
      throw new NotFoundException(`Branch with ID ${id} not found`);
    }
    return branch;
  }

  async update(id: number, updateBranchDto: UpdateBranchDto): Promise<Branch> {
    const branch = await this.findOne(id);
    Object.assign(branch, updateBranchDto);
    return await this.branchRepository.save(branch);
  }

  async remove(id: number): Promise<void> {
    const result = await this.branchRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Branch with ID ${id} not found`);
    }
  }

  async search(query: any): Promise<any> {
    const body = {
      query: {
        multi_match: {
          query: query.query,
          fields: ['name', 'locationLink'],
        },
      },
    };
    return await this.searchService.search('branches', body);
}
}