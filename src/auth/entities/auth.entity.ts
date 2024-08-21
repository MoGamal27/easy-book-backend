import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../interface/Role";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true})
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.User
 })
    role: Role;

}