import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksRequest } from './dtos/tasks.request';
import { TasksEntity } from './tasks.entity';
@Controller()
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
  public listAll(@Query('take', ParseIntPipe) take?: number): TasksEntity[] {
    return this.tasksService.listAll(take);
  }

  //Route findByName
  @HttpCode(HttpStatus.OK)
  @Get(':name')
  public findByName(@Param('name') name: string): TasksEntity {
    return this.tasksService.findByName(name);
  }

  //Route Delete
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':name')
  public delete(@Param('name') name: string): boolean {
    return this.tasksService.delete(name);
  }

  //Route Modify
  @HttpCode(HttpStatus.ACCEPTED)
  @Patch(':name')
  public modifyByName(
    @Param('name') name: string,
    @Body() description: string,
  ) {
    return this.tasksService.modifyDescription(name, description);
  }
}
