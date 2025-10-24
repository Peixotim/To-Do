import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksRequest } from './dtos/tasks.request';
@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  public create(@Body() tasksRequest: TasksRequest) {
    return this.tasksService.create(tasksRequest);
  }
}
