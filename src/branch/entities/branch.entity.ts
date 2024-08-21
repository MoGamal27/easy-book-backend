import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Branch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  locationLink: string;

  @Column()
  imageUrl: string;
}