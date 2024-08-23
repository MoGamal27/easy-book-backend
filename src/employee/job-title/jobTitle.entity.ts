import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class JobTitle {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}