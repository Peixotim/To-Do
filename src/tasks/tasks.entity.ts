import { UUID } from 'crypto';

export class TasksEntity {
  id: UUID;
  name: string;
  description: string;
  status: boolean;
  dateCreation: Date;

  constructor(
    id: UUID,
    name: string,
    description: string,
    status: boolean,
    dateCreation: Date,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.dateCreation = dateCreation;
  }
}
