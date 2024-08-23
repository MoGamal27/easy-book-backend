import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Branch } from '../../branch/entities/branch.entity';
import { JobTitle } from '../job-title/jobTitle.entity'

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Branch)
  @JoinColumn({ name: 'branchId' })
  branch: Branch;

  @Column()
  branchId: number;

  @Column('float')
  numberOfWorkHours: number;

  @ManyToOne(() => JobTitle)
  @JoinColumn({ name: 'jobTitleId' })
  jobTitle: JobTitle;

  @Column()
  jobTitleId: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  code: string;

  @Column()
  phoneNumber: string;

  @Column({ nullable: true })
  oneTimePassword: string;
}