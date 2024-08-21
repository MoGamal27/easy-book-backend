import { IsNotEmpty, IsNumber, IsString, IsDate, IsPositive } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  clientId: number;


  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  amountService: number;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  @IsString()
  time: string;

  @IsNotEmpty()
  @IsNumber()
  paymentMethodId: number;
}