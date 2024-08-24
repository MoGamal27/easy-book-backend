import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { Branch } from './entities/branch.entity';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { SearchModule } from 'src/elasticsearch/elasticsearch.module';

@Module({
  imports: [TypeOrmModule.forFeature([Branch]),
  CloudinaryModule,
  SearchModule
],
  controllers: [BranchController],
  providers: [BranchService],
})
export class BranchModule {}