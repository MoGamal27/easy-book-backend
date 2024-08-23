import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { Employee } from './entities/employee.entity';
import { JobTitleModule } from './job-title/jobTitle.module';
import { JobTitleService } from './job-title/jobTitle.service';
import { JobTitle } from './job-title/jobTitle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, JobTitle]),
 JobTitleModule
],
  controllers: [EmployeeController],
  providers: [EmployeeService, JobTitleService],
  exports: [EmployeeService, JobTitleService]
})
export class EmployeeModule {}