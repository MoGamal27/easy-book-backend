import { IsNotEmpty, IsNumber, IsString, IsDate, IsPositive } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  clientId: number;

  @IsNotEmpty()
  @IsString()
  bookingBy: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  amountService: number;

  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsString()
  time: string;

  @IsNotEmpty()
  @IsNumber()
  paymentMethodId: number;
}