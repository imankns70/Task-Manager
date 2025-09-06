import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;
  @IsNotEmpty()
  @IsInt()
  statusId!: number;
}
