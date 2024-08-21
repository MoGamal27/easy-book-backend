import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateTimeFrameDto {
  @IsNotEmpty()
  @IsNumber()
  branchId: number;

  @IsNotEmpty()
  @IsString()
  day: string;

  @IsNotEmpty()
  @IsString()
  time: string;
}