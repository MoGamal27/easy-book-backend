import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateBranchDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsUrl()
  locationLink: string;

  @IsNotEmpty()
  @IsUrl()
  imageUrl: string;
}