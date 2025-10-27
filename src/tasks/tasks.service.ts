import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  public findByName(name: string): TasksEntity {
    const nameFound = Array.from(this.tasks.values()).find(
      (task) => task.name === name,
    );

    if (nameFound === undefined) {
      throw new HttpException(
        `Task with name "${name}" not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return nameFound;
  }

  public listAll(quantity?: number): TasksEntity[] {
    const arrayTask = Array.from(this.tasks.values());

    if (this.tasks.size < 0) {
      throw new NotFoundException('Error, there is no registered task not');
    }

    //Retorna uma quantidade especifica de tasks
    if (quantity) {
      return arrayTask.slice(0, quantity);
    }

    return Array.from(this.tasks.values());
  }

  public delete(name: string): boolean {
    const nameFound = Array.from(this.tasks.entries()).find(
      ([, task]) => task.name === name,
    );

    if (!nameFound) {
      throw new HttpException(
        `Task with name "${name}" not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    const [id] = nameFound;
    this.tasks.delete(id);
    return true;
  }

  public modifyDescription(name: string, description: string): TasksEntity {
    const arrayTasks = this.tasks.values();
    const searchArray = Array.from(arrayTasks).find(
      (task) => task.name === name,
    );

    if (searchArray === undefined) {
      throw new HttpException(
        `Task with name "${name}" not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    searchArray.description = description;
    return searchArray;
  }
}
