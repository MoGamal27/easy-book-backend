import { IsEmail, IsNotEmpty } from "class-validator";
import { Role } from "../interface/Role";


export class SignupDto {
    
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
   
    @IsNotEmpty()
    password: string;

    role: Role;

}