import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksRequest } from './dtos/tasks.request';
import { TasksEntity } from './tasks.entity';
@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  public create(@Body() tasksRequest: TasksRequest) {
    return this.tasksService.create(tasksRequest);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  public listAll(): TasksEntity[] {
    return this.tasksService.listAll();
  }
}
