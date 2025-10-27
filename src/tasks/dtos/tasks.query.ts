import { IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
export class ListTasksQueryDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  readonly take?: number;
}
