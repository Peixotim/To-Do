import { IsString } from 'class-validator';

export class Update {
  @IsString()
  description: string;
}
