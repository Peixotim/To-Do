import { IsNotEmpty, IsString } from 'class-validator';

export class Update {
  @IsString()
  @IsNotEmpty()
  description: string;
}
