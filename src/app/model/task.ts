export interface ITask {
  itemId: number;
  taskName: string;
  description: string;
  dueDate: Date;
  createdOn: Date;
  isCompleted: boolean;
  status: string; // New field for status
  tags: string;
  completedOn: Date;
  priority: string;
}

// for the data which is going to send or bind with the form , always try to make interface
export class Task implements ITask {
  itemId: number;
  taskName: string;
  description: string;
  dueDate: Date;
  createdOn: Date;
  isCompleted: boolean;
  status: string; // New field for status
  tags: string;
  completedOn: Date;
  priority: string;

  constructor() {
    this.itemId = 0;
    this.taskName = '';
    this.description = '';
    this.dueDate = new Date();
    this.createdOn = new Date();
    this.isCompleted = false;
    this.status = 'Pending'; // Default status value
    this.tags = '';
    this.completedOn = new Date();
    this.priority = 'Normal'; // Default priority value
  }
}

export interface ApiResponceModel {
  message: string;
  result: string;
  data: any;
}
