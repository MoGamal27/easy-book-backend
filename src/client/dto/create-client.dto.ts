import { IsNotEmpty, IsString, IsPhoneNumber, IsDate, IsOptional } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @IsNotEmpty()
  totalOrder: number;

  @IsNotEmpty()
  joinDate: string;

  
  @IsNotEmpty()
  lastOrder: string;
}