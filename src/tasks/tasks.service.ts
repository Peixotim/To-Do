import { Injectable, NotFoundException } from '@nestjs/common';
import { TasksEntity } from './tasks.entity';
import { TasksRequest } from './dtos/tasks.request';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class TasksService {
  private tasks = new Map<string, TasksEntity>();

  public create(request: TasksRequest): TasksEntity {
    const id = uuidv4();
    const newUser: TasksEntity = {
      id: id,
      name: request.name,
      description: request.description,
      dateCreation: request.dateCreation,
      status: request.status,
    };

    this.tasks.set(id, newUser);

    return newUser;
  }

  public listAll(): TasksEntity[] {
    if (this.tasks.size === null) {
      throw new NotFoundException('Error, there is no registered task not');
    }
    return Array.from(this.tasks.values());
  }

  public delete(name: string): boolean {
    const nameFound = Array.from(this.tasks.entries()).find(
      ([, task]) => task.name === name,
    );

    if (!nameFound) {
      throw new NotFoundException(`Task with name "${name}" not found`);
    }

    const [id] = nameFound;
    this.tasks.delete(id);
    return true;
  }
}
