import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class jobTitle {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}