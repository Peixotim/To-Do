export class TasksEntity {
  id: string;
  name: string;
  description: string;
  status: string;
  dateCreation: Date;

  constructor(
    id: string,
    name: string,
    description: string,
    status: string,
    dateCreation: Date,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.dateCreation = dateCreation;
  }
}
