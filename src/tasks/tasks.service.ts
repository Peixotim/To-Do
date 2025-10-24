import { Injectable } from '@nestjs/common';
import { TasksEntity } from './tasks.entity';
import { TasksRequest } from './dtos/tasks.request';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class TasksService {
  private tasks = new Map<number, TasksEntity>();
  private currentId = 0;

  public create(request: TasksRequest): TasksEntity {
    const id = uuidv4();
    const newUser: TasksEntity = {
      id: id,
      name: request.name,
      description: request.description,
      dateCreation: request.dateCreation,
      status: request.status,
    };

    const current = this.currentId++;
    this.tasks.set(current, newUser);

    return newUser;
  }
}
