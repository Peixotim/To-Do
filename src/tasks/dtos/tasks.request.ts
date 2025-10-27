import { IsNotEmpty, IsDate, IsString, IsOptional } from 'class-validator';
export class TasksRequest {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  status: string;

  @IsDate()
  @IsOptional()
  dateCreation: string;

  constructor(
    id: string,
    name: string,
    description: string,
    status: string,
    dateCreation: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.dateCreation = dateCreation;
  }
}
