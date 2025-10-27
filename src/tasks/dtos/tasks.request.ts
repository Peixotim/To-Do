import { IsNotEmpty, IsBoolean, IsDate, IsString } from 'class-validator';
export class TasksRequest {
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsBoolean()
  status: boolean;
  @IsDate()
  dateCreation: Date;

  constructor(
    id: string,
    name: string,
    description: string,
    status: boolean,
    dateCreation: Date,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.dateCreation = dateCreation;
  }
}
