/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsEmail, IsNumber, IsPositive, IsOptional } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsNumber()
  branchId: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  numberOfWorkHours: number;

  @IsNotEmpty()
  @IsString()
  jobTitle: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsOptional()
  @IsString()
  oneTimePassword?: string;
}