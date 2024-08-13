import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import * as bcypt from bcrypt;


export class User {
@PrimaryGeneratedColumn()
id: number;

@Column({unique = true})
@IsEmail({message: 'Please enter a valid email'})
email: string;

@Column()
password: string;

@BeforeInsert()
async hashPassword() {
    this.password = await bcypt.hash(this.password, 10);
}
}