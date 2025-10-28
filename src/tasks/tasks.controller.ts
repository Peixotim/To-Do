import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksRequest } from './dtos/tasks.request';
import { TasksEntity } from './tasks.entity';
import { Update } from './dtos/tasks.requestUpdate';
import { ListTasksQueryDto } from './dtos/tasks.query';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  //Route Create
  @HttpCode(HttpStatus.CREATED)
  @Post()
  public create(@Body() tasksRequest: TasksRequest) {
    return this.tasksService.create(tasksRequest);
  }

  //Route ListAll
  @HttpCode(HttpStatus.OK)
  @Get()
  public listAll(@Query() take?: ListTasksQueryDto): Promise<TasksEntity[]> {
    return this.tasksService.listAll(take?.take);
  }

  //Route findByName
  @HttpCode(HttpStatus.OK)
  @Get(':name')
  public findByName(@Param('name') name: string): Promise<TasksEntity> {
    return this.tasksService.findByName(name);
  }

  //Route Delete
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':name')
  public delete(@Param('name') name: string): Promise<TasksEntity> {
    return this.tasksService.delete(name);
  }

  //Route Modify
  @HttpCode(HttpStatus.ACCEPTED)
  @Patch(':name')
  public modifyDescription(
    @Param('name') name: string,
    @Body() updater: Update,
  ): Promise<TasksEntity> {
    return this.tasksService.modifyDescription(name, updater.description);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public findById(@Param('id') id: string): Promise<TasksEntity> {
    return this.tasksService.findById(id);
  }
}
