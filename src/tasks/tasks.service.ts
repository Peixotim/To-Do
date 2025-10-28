import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TasksEntity } from './tasks.entity';
import { TasksRequest } from './dtos/tasks.request';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksEntity)
    private readonly tasksRepository: Repository<TasksEntity>,
  ) {}

  public async create(request: TasksRequest): Promise<TasksEntity> {
    const id = uuidv4();
    const newTask: TasksEntity = {
      id: id,
      name: request.name,
      description: request.description,
      dateCreation: new Date(),
      status: request.status,
    };

    await this.tasksRepository.save(newTask);

    return newTask;
  }

  public async findByName(name: string): Promise<TasksEntity> {
    const nameFound = await this.tasksRepository.findOneBy({ name });

    if (nameFound === null) {
      throw new HttpException(
        `Task with name "${name}" not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return nameFound;
  }

  public async listAll(quantity?: number): Promise<TasksEntity[]> {
    const arrayTasks = await this.tasksRepository.find();

    if (arrayTasks.length === 0) {
      throw new HttpException(`Not Found Tasks`, HttpStatus.NOT_FOUND);
    }

    //Retorna uma quantidade especifica de tasks
    if (quantity) {
      return this.tasksRepository.find({ take: quantity });
    }

    return arrayTasks;
  }

  public async delete(name: string): Promise<TasksEntity> {
    const nameFound = await this.tasksRepository.findOne({
      where: { name },
    });

    if (nameFound === null) {
      throw new HttpException(
        `Task with name "${name}" not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    await this.tasksRepository.delete(nameFound.id);

    return nameFound;
  }

  public async modifyDescription(
    name: string,
    description: string,
  ): Promise<TasksEntity> {
    const searchEntity = await this.tasksRepository.findOneBy({ name });

    if (searchEntity === null) {
      throw new HttpException(
        `Task with name "${name}" not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    searchEntity.description = description;
    const saved = await this.tasksRepository.save(searchEntity);

    return saved;
  }
}
