import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Branch } from '../../branch/entities/branch.entity';

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

  @Column()
  jobTitle: string;

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